import { actionObject, fetchService } from '@utils'
import { CredentialsProps } from '@types'
import { users } from '@repository'
import { LOGIN, LOGOUT } from './action-types'
import { GET_COMMUNES } from '@store/commune/action-types'
import { communes } from '@utils/path'

export const login = (credentials: CredentialsProps) => {
  try {
    const { email, password, remember } = credentials
    const user = users.find(user => user.email == email)

    if(!user) throw 'Invalid user'
    if(user.password != password) throw 'Invalid password'

    return actionObject(LOGIN, {
      hasRemember: remember,
      accessToken: user.accessToken,
      email: user.email
    })

  } catch(e) {
    console.log(e);

    return actionObject(LOGIN, {
      hasRemember: false,
      accessToken: null,
      email: ''
    })
  }
}

export const logout = () => (dispatch, getState) => {
  let
    currentEmail = '',
    currentIsAuth = null

  const { auth: { email, hasRemember } } = getState()
  if(hasRemember) currentEmail = email

  dispatch(actionObject(LOGOUT, {
    email: currentEmail,
    accessToken: currentIsAuth
  }))
}
