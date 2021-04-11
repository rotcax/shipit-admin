import { FC, useState } from 'react'
import { Steps, Button, Form } from 'antd'
import { HomeLayout, QuotesForm, BetterCourier } from '@components'
import { createRate } from '@store/actions'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '@styles/Quotes.module.scss'

const { Step } = Steps

const steps = [
  {
    title: 'First',
    content: <QuotesForm />,
  },
  {
    title: 'Second',
    content: <BetterCourier />,
  }
]

const Quotes: FC = () => {
  const [current, setCurrent] = useState(0)
  const [form] = Form.useForm()

  const dispatch = useDispatch()
  const router = useRouter()

  const send = () => form.submit()
  const next = () => setCurrent(current + 1)
  const prev = () => setCurrent(current - 1)

  const onFinish = (values: any) => {
    dispatch(createRate(values))
    setCurrent(current + 1)
  }

  return (
    <>
      <Head>
        <title>Cotizador</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeLayout>
        <div style={{ height: '100vh' }}>
          <Steps current={current}>
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <Form
            form={form}
            name="advanced_search"
            onFinish={onFinish}
          >
            <div className={styles.steps_content}>
              {steps[current].content}
            </div>
            <div className={styles.steps_action}>
              {current == 0 && (
                <Button type="primary" onClick={() => send()}>
                  Cotizar
                </Button>
              )}
              {current != 0 && current < steps.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button type="primary" onClick={() => router.push('shipments')}>
                  Crear un envio
                </Button>
              )}
              {current > 0 && (
                <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
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
