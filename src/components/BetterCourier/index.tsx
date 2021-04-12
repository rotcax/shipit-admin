import { useSelector } from 'react-redux'
import Image from 'next/image'

const BetterCourier = () => {
  const {
    rate: { betterPrice },
    courier: { couriers }
  } = useSelector((state: any) => state)

  const imageUrlForBetterPrice = couriers.find(current => current.name.toLowerCase() == betterPrice.lower_price.original_courier)?.image_original_url

  return (
    <>
      {
        betterPrice ? (
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <div>
              {
                betterPrice?.prices?.map((courier, index) => {
                  const imageUrl = couriers.find(current => current.name.toLowerCase() == courier.original_courier)?.image_original_url

                  return (
                    <div key={index} style={{ display: 'flex', marginBottom: 20, padding: 20 }}>
                      <div style={{ width: '25%' }}>
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
                      <div style={{ width: '25%' }}>
                        Precio: {courier.price}
                      </div>
                      <div style={{ width: '25%' }}>
                        Peso equivalente: {courier.volumetric_weight}
                      </div>
                      <div style={{ width: '25%' }}>
                        Plazo estimado: {courier.days}
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div style={{ backgroundColor: '#f6ffed', border: '1px solid #b7eb8f', padding: 20 }}>
              <p style={{ fontWeight: 'bold' }}>Mejor precio</p>
              <div style={{ display: 'flex' }}>
                <div style={{ width: '25%' }}>
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
                <div style={{ width: '25%' }}>
                  Precio: {betterPrice.lower_price.price}
                </div>
                <div style={{ width: '25%' }}>
                  Peso equivalente: {betterPrice.lower_price.volumetric_weight}
                </div>
                <div style={{ width: '25%' }}>
                  Plazo estimado: {betterPrice.lower_price.days}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>No existen precios bajo los parametros enviados</div>
        )
      }
    </>
  )
}

export default BetterCourier
