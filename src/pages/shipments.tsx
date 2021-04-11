import { FC, useState } from 'react'
import { Steps, Button, Form } from 'antd'
import { HomeLayout, DestinyForm, SizesForm, SellerForm, CourierForm } from '@components'
import { createShipment } from '@store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '@styles/Quotes.module.scss'

const { Step } = Steps

const steps = [
  {
    title: 'Destino',
    content: <DestinyForm />,
  },
  {
    title: 'Medidas',
    content: <SizesForm />,
  },
  {
    title: 'Vendedor',
    content: <SellerForm />,
  },
  {
    title: 'Courier',
    content: <CourierForm />,
  },
  {
    title: 'Seguro',
    content: <CourierForm />,
  },
  {
    title: 'Finalizar',
    content: null,
  }
]

const Shipments: FC = () => {
  const [current, setCurrent] = useState(0)
  const [form] = Form.useForm()
  const { currentForm } = useSelector((state: any) => state.shipment)

  const initialValues = {
    ...currentForm.courier,
    ...currentForm.destiny,
    ...currentForm.sizes
  }

  const dispatch = useDispatch()
  const router = useRouter()

  const next = () => {
    console.log(current);

    form.submit()
    setCurrent(current + 1)
  }

  const prev = () => setCurrent(current - 1)

  const onFinish = (values: any) => {
    console.log(values);
    // setCurrent(current + 1)
  }

  return (
    <>
      <Head>
        <title>Envios</title>
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
            initialValues={initialValues}
          >
            <div className={styles.steps_content}>
              {steps[current].content}
            </div>
            <div className={styles.steps_action}>
              {current < steps.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                  Siguiente
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button type="primary" onClick={() => console.log('')}>
                  Crear envio
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

export default Shipments
