import { useSelector } from 'react-redux'
import styles from './styles.module.scss'
import Image from 'next/image'

const ShipmentResume = () => {
  const {
    shipment: { currentForm },
    courier: { couriers },
    commune: { communes }
  } = useSelector((state: any) => state)

  return (
    <div className={styles.container}>
      <div className={styles.sub_container}>
        <div className={styles.card}>
          <h2>Destino</h2>
          <ul>
            <li>Calle: {currentForm.destiny.street}</li>
            <li>Nro. de calle: {currentForm.destiny.number}</li>
            <li>Comuna: {communes.find(commune => commune.id == currentForm.destiny.commune_id)?.name}</li>
            <li>Referencia: {currentForm.destiny.complement ?? ''}</li>
            <li>Nombre completo: {currentForm.destiny.full_name}</li>
            <li>Email de contacto: {currentForm.destiny.email ?? ''}</li>
            <li>Telefono de contacto: {currentForm.destiny.phone ?? ''}</li>
          </ul>

        </div>
        <div className={styles.card}>
          <h2>Medidas</h2>
          <ul>
            <li>Alto: {currentForm.sizes.height}</li>
            <li>Ancho: {currentForm.sizes.width}</li>
            <li>Largo: {currentForm.sizes.length}</li>
            <li>Peso: {currentForm.sizes.weight}</li>
          </ul>
        </div>
      </div>
      <div className={styles.sub_container}>
        <div className={styles.card}>
          <h2>Courier</h2>
          <div style={{ height: '100%', padding: 30 }}>
            <Image
              src={couriers.find(current => current.name == currentForm.courier.client)?.image_original_url}
              alt={currentForm.courier.client}
              width={200}
              height={100}
            />
          </div>
        </div>
        <div className={styles.card}>
          <h2>Datos Adicionales</h2>
          <ul>
            <li>Nro. Items: {currentForm.sizes.items}</li>
            <li>Nombre del e-commerce: {currentForm.seller.name ?? ''}</li>
            <li>ID de la venta: {currentForm.seller.id ?? ''}</li>
            <li>Nro. Boleta de venta: {currentForm.insurance.ticket_number ?? ''}</li>
            <li>Valor de los productos: {currentForm.insurance.ticket_amount}</li>
            <li>Detalles: {currentForm.insurance.detail}</li>
            <li>Seguro adicional?: {
                currentForm.insurance.extra == 'true' ? 'Si'
                  : currentForm.insurance.extra == 'false' ? 'No'
                  : ''
              }
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ShipmentResume
