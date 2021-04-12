import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { Button } from 'antd'
import { clearShipmentForm } from '@store/actions'
import styles from './styles.module.scss'

const ShipmentResult = () => {
  const { result } = useSelector((state: any) => state.shipment)
  const router = useRouter()
  const dispatch = useDispatch()

  const finish = () => {
    dispatch(clearShipmentForm())
    router.push('/')
  }

  return (
    <div className={styles.container}>
      {
        result?.id ? (
          <div className={styles.success_message}>
            <div>
              Su pedido <span className={styles.bold_title}>{result.id}</span> fue creado con exito.
              Referencia: <span className={styles.bold_title}>{result.reference}</span>
            </div>
            <div className={styles.separation}>
              <Button type="link" onClick={() => finish()}>Volver a inicio</Button>
            </div>
          </div>
        ) : (
          <div>{result}</div>
        )
      }
    </div>
  )
}

export default ShipmentResult
