export type AuthState = {
  email: string
  accessToken: string | null
  hasRemember: boolean
}

export type CommuneState = {
  communes: Array<any>
}

export type CouriersState = {
  couriers: Array<any>
}
