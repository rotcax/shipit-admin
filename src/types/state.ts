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
