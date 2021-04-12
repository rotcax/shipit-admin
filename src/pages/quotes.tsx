import { FC, useEffect, useState } from 'react'
import { Steps, Button, Form, message } from 'antd'
import { HomeLayout, QuotesForm, BetterCourier } from '@components'
import { createRate } from '@store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '@styles/Quotes.module.scss'

const { Step } = Steps

const steps = [
  {
    title: 'Medidas',
    content: <QuotesForm />,
  },
  {
    title: 'Resultado',
    content: <BetterCourier />,
  }
]

const Quotes: FC = () => {
  const [current, setCurrent] = useState(0)
  const [disabled, setDisabled] = useState(false)
  const [form] = Form.useForm()

  const { rateDone } = useSelector((state: any) => state.rate)

  useEffect(() => {
    if (rateDone) {
      setCurrent(current + 1)
      setDisabled(false)
    }
  }, [rateDone])

  const dispatch = useDispatch()
  const router = useRouter()

  const send = () => form.submit()
  const prev = () => setCurrent(current - 1)

  const onFinish = (values: any) => {
    dispatch(createRate(values))
    setDisabled(true)
    message.info('Consultando mejor precio...', 1)
  }

  return (
    <>
      <Head>
        <title>Cotizador</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeLayout>
        <div className={styles.container}>
          <Steps current={current}>
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <Form
            form={form}
            name="quotes_form"
            onFinish={onFinish}
          >
            <div className={styles.steps_content}>
              {steps[current].content}
            </div>
            <div className={styles.steps_action}>
              {current == 0 && (
                <Button type="primary" disabled={disabled} onClick={() => send()}>
                  Cotizar
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button type="primary" onClick={() => router.push('shipments')}>
                  Crear un envio
                </Button>
              )}
              {current > 0 && (
                <Button className={styles.button_space} onClick={() => prev()}>
                  Volver
                </Button>
              )}
            </div>
          </Form>
        </div>
      </HomeLayout>
    </>
  )
}

export default Quotes
