import styles from './styles.module.scss'

const ShipmentResume = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sub_container}>
        <div className={styles.card}>
          <h2>Destino</h2>
        </div>
        <div className={styles.card}>
          <h2>Medidas</h2>
        </div>
      </div>
      <div className={styles.sub_container}>
        <div className={styles.card}>
          <h2>Courier</h2>
        </div>
        <div className={styles.card}>
          <h2>Datos Adicionales</h2>
        </div>
      </div>
    </div>
  )
}

export default ShipmentResume
