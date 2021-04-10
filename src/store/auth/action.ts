import { actionObject } from '@utils'
import { CredentialsProps } from '@types'
import { LOGIN, LOGOUT } from './action-types'

export const login = (credentials: CredentialsProps) => actionObject(LOGIN, credentials)
export const logout = () => actionObject(LOGOUT)
