import { actionObject } from '@utils'
import { CredentialsProps } from '@types'
import { users } from '@repository'
import { LOGIN } from './action-types'

export const login = (credentials: CredentialsProps) => dispatch => {
  try {
    const { email, password } = credentials
    const user = users.find(user => user.email == email)

    if(!user) throw 'Invalid user'
    if(user.password != password) throw 'Invalid password'

    dispatch(actionObject(LOGIN, { email: user.email, isAuth: true }))

  } catch(e) {
    console.log(e);
  }
}
