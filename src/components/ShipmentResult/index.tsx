import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { Button } from 'antd'
import { clearShipmentForm } from '@store/actions'

const ShipmentResult = () => {
  const { result } = useSelector((state: any) => state.shipment)
  const router = useRouter()
  const dispatch = useDispatch()

  const finish = () => {
    dispatch(clearShipmentForm())
    router.push('/')
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      {
        result?.id ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div>
              Su pedido <span style={{ fontWeight: 'bold' }}>{result.id}</span> fue creado con exito.
              Referencia: <span style={{ fontWeight: 'bold' }}>{result.reference}</span>
            </div>
            <div style={{ marginTop: 20 }}>
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
