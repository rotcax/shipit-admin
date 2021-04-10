import { actionObject } from '@utils'
import { LOGIN } from './action-types'

export const login = (credentials) => {
  return actionObject(LOGIN, credentials)
}
