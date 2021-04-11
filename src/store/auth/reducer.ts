import { AnyAction } from 'redux'
import { AuthState } from '@types';
import { LOGIN_ASYNC, LOGOUT_ASYNC } from './action-types'

const initialState: AuthState = {
  email: '',
  accessToken: null,
  hasRemember: false,
  isAuth: false
}

const reducer = (state = initialState, { type, payload }: AnyAction) => {
  switch(type) {
    case LOGIN_ASYNC:
      return { ...state, ...payload }

    case LOGOUT_ASYNC:
      return { ...state, ...payload }

    default:
      return state
  }
}

export default reducer
