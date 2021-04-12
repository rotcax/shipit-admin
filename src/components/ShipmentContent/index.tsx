import { FC, useEffect, useState } from 'react'
import { Steps, Button, Form, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { steps, currentAction } from './elements'
import { createShipment } from '@store/actions'
import styles from './styles.module.scss'

const { Step } = Steps

const ShipmentContent: FC = () => {
  const [current, setCurrent] = useState(0)
  const [disabled, setDisabled] = useState(false)

  const [form] = Form.useForm()
  const { currentForm, shipmentDone } = useSelector((state: any) => state.shipment)

  const dispatch: any = useDispatch()

  useEffect(() => {
    if (shipmentDone) {
      setCurrent(current + 1)
      setDisabled(false)
    }
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
    setDisabled(true)
    dispatch(createShipment())
    message.info('Creando...', 0.5)
  }

  return (
    <div className={styles.container}>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <Form
        form={form}
        name="shipment_form"
        onFinish={onFinish}
        initialValues={initialValues}
      >
        <div className={styles.steps_content}>
          {steps[current].content}
        </div>
        <div className={styles.steps_action}>
          {current < steps.length - 1 && current != 5 && (
            <Button type="primary" onClick={() => next()}>
              Siguiente
            </Button>
          )}
          {current === 5 && (
            <Button type="primary" disabled={disabled} onClick={() => createShipmentDone()}>
              Crear envio
            </Button>
          )}
          {current > 0 && (
            <Button className={styles.button_space} onClick={() => prev()}>
              Volver
            </Button>
          )}
        </div>
        {
          initialValues?.commune_id && current == 0 ? (
            <>
              <div className={styles.space}>
                Guardamos los resultados de tu cotizacion 😊
              </div>
              <div>
                Los mismos se pueden editar
              </div>
            </>
          ) : null
        }
      </Form>
    </div>
  )
}

export default ShipmentContent
