import { AnyAction } from 'redux'
import { AuthState } from '@types';
import { LOGIN, LOGOUT } from './action-types'

const initialState: AuthState = {
  email: '',
  accessToken: null,
  hasRemember: false
}

const reducer = (state = initialState, { type, payload }: AnyAction) => {
  switch(type) {
    case LOGIN:
      return { ...state, ...payload }

    case LOGOUT:
      return { ...state, ...payload }

    default:
      return state
  }
}

export default reducer
