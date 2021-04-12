const
  HTTP_PROTOCOL: string = process.env.NEXT_PUBLIC_HTTP_PROTOCOL || 'https://',
  API_PREFIX: string = process.env.NEXT_PUBLIC_API_PREFIX || 'api',
  PRICE_PREFIX: string = process.env.NEXT_PUBLIC_PRICE_PREFIX || 'prices',
  BASE_URL: string = process.env.NEXT_PUBLIC_BASE_URL || 'shipit.cl/v/'

export const
  HOST_API_URI: string = `${HTTP_PROTOCOL}${API_PREFIX}.${BASE_URL}`,
  HOST_PRICE_URI: string = `${HTTP_PROTOCOL}${PRICE_PREFIX}.${BASE_URL}`,
  communes: string = `${HOST_API_URI}communes`,
  couriers: string = `${HOST_PRICE_URI}couriers`,
  rates: string = `${HOST_API_URI}rates`,
  shipments: string = `${HOST_API_URI}shipments`,
  origins: string = `${HOST_API_URI}origins`
