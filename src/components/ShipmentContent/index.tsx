import { FC, useEffect, useState } from 'react'
import { Steps, Button, Form, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { steps, currentAction } from './elements'
import { createShipment } from '@store/actions'
import styles from '@styles/Quotes.module.scss'

const { Step } = Steps

const ShipmentContent: FC = () => {
  const [current, setCurrent] = useState(0)
  const [form] = Form.useForm()
  const { currentForm, shipmentDone } = useSelector((state: any) => state.shipment)

  const dispatch: any = useDispatch()
  const router = useRouter()

  useEffect(() => {
    if (shipmentDone) router.push('/')
  }, [shipmentDone])

  const initialValues = {
    ...currentForm.courier,
    ...currentForm.destiny,
    ...currentForm.sizes
  }

  const next = () => form.submit()
  const prev = () => setCurrent(current - 1)

  const onFinish = (values: any) => {
    dispatch(currentAction(current)(values))
    setCurrent(current + 1)
  }

  const createShipmentDone = () => {
    dispatch(createShipment())
    message.info('Creando...', 0.5)
  }

  return (
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
            <Button type="primary" onClick={() => createShipmentDone()}>
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
  )
}

export default ShipmentContent