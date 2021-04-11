import { useSelector } from 'react-redux'

const BetterCourier = () => {
  const { betterPrice } = useSelector((state: any) => state.rate)

  return (
    <>
      {
        betterPrice ? (
          <div>
            <div>
              {
                betterPrice?.prices?.map(courier => (
                  <div>
                    <p>Nombre: {courier.original_courier}</p>
                    <p>Precio: {courier.price}</p>
                    <p>Peso equivalente: {courier.volumetric_weight}</p>
                    <p>Plao estimado: {courier.days}</p>
                  </div>
                ))
              }
            </div>
            <div>
              <p>Mejor precio</p>
              <p>Nombre: {betterPrice.lower_price.original_courier}</p>
              <p>Precio: {betterPrice.lower_price.price}</p>
              <p>Peso equivalente: {betterPrice.lower_price.volumetric_weight}</p>
              <p>Plao estimado: {betterPrice.lower_price.days}</p>
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
