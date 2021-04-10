import { actionObject } from '@utils'
import { CredentialsProps } from '@types'
import { LOGIN } from './action-types'

export const login = (credentials: CredentialsProps) => {
  return actionObject(LOGIN, credentials)
}
