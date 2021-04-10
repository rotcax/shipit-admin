import { actionObject } from '@utils'
import { CredentialsProps } from '@types'
import { users } from '@repository'
import { LOGIN, LOGOUT } from './action-types'

export const login = (credentials: CredentialsProps) => dispatch => {
  try {
    const { email, password, remember } = credentials
    const user = users.find(user => user.email == email)

    if(!user) throw 'Invalid user'
    if(user.password != password) throw 'Invalid password'

    delete user.password

    dispatch(actionObject(LOGIN, {
      hasRemember: remember,
      ...user
    }))

  } catch(e) {
    console.log(e);
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
