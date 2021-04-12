export type AuthState = {
  email: string
  accessToken: string | null
  hasRemember: boolean
  isAuth: boolean
}

export type CommuneState = {
  communes: Array<any>
}

export type CouriersState = {
  couriers: Array<any>
}

export type IntermitenceState = {
  currentPath: string
}

export type OriginState = {
  origins: Array<any>
}

export type RateState = {
  betterPrice: any
  rateDone: boolean
}

type CurrentForm = {
  sizes: any
  courier: any
  destiny: any
}

export type ShipmentState = {
  shipmentDone: boolean
  result: any | null
  currentForm: CurrentForm
}
