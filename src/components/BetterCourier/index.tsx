import { useSelector } from 'react-redux'
import Image from 'next/image'
import styles from './styles.module.scss'

const BetterCourier = () => {
  const {
    rate: { betterPrice },
    courier: { couriers }
  } = useSelector((state: any) => state)

  const imageUrlForBetterPrice = couriers.find(current => current.name.toLowerCase() == betterPrice?.lower_price.original_courier)?.image_original_url

  return (
    <>
      {
        betterPrice ? (
          <div className={styles.container}>
            <div className={styles.list_separation}>
              {
                betterPrice?.prices?.map((courier, index) => {
                  const imageUrl = couriers.find(current => current.name.toLowerCase() == courier.original_courier)?.image_original_url

                  return (
                    <div key={index} className={styles.list}>
                      <div className={styles.column}>
                        {
                          imageUrl ? (
                            <Image
                              src={imageUrl}
                              alt={courier.original_courier}
                              width={150}
                              height={50}
                            />
                          ) : (
                            <div>
                              Courier: {courier.original_courier}
                            </div>
                          )
                        }
                      </div>
                      <div className={styles.column}>
                        Precio: {courier.price}
                      </div>
                      <div className={styles.column}>
                        Peso equivalente: {courier.volumetric_weight}
                      </div>
                      <div className={styles.column}>
                        Plazo estimado: {courier.days}
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className={styles.better_price}>
              <p className={styles.bold_title}>Mejor precio</p>
              <div className={styles.flex}>
                <div className={styles.column}>
                  {
                    imageUrlForBetterPrice ? (
                      <Image
                        src={imageUrlForBetterPrice}
                        alt={betterPrice.lower_price.original_courier}
                        width={150}
                        height={50}
                      />
                    ) : (
                      <div>
                        Nombre: {betterPrice.lower_price.original_courier}
                      </div>
                    )
                  }
                </div>
                <div className={styles.column}>
                  Precio: {betterPrice.lower_price.price}
                </div>
                <div className={styles.column}>
                  Peso equivalente: {betterPrice.lower_price.volumetric_weight}
                </div>
                <div className={styles.column}>
                  Plazo estimado: {betterPrice.lower_price.days}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>No existen precios bajos los parametros enviados</div>
        )
      }
    </>
  )
}

export default BetterCourier
