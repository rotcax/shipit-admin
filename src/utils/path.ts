const
  HTTP_PROTOCOL: string = process.env.HTTP_PROTOCOL,
  API_PREFIX: string = process.env.API_PREFIX,
  PRICE_PREFIX: string = process.env.PRICE_PREFIX,
  BASE_URL: string = process.env.BASE_URL

export const
  HOST_API_URI: string = `${HTTP_PROTOCOL}${API_PREFIX}.${BASE_URL}`,
  HOST_PRICE_URI: string = `${HTTP_PROTOCOL}${PRICE_PREFIX}.${BASE_URL}`,
  communes: string = `${HOST_API_URI}communes`,
  couriers: string = `${HOST_PRICE_URI}couriers`,
  rates: string = `${HOST_API_URI}rates`,
  shipments: string = `${HOST_API_URI}shipments`
