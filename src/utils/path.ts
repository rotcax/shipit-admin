const
  HTTP_PROTOCOL = process.env.HTTP_PROTOCOL,
  API_PREFIX = process.env.API_PREFIX,
  PRICE_PREFIX = process.env.PRICE_PREFIX,
  BASE_URL = process.env.BASE_URL

export const
  HOST_API_URI = `${HTTP_PROTOCOL}${API_PREFIX}.${BASE_URL}`,
  HOST_PRICE_URI = `${HTTP_PROTOCOL}${PRICE_PREFIX}.${BASE_URL}`,
  communes = `${HOST_API_URI}communes`,
  couriers = `${HOST_PRICE_URI}couriers`,
  rates = `${HOST_API_URI}rates`,
  shipments = `${HOST_API_URI}shipments`
