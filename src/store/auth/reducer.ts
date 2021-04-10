import { AnyAction } from 'redux'
import { LOGIN } from './action-types'

const initialState = {
  email: '',
  isAuth: false
}

const reducer = (state = initialState, { type, payload }: AnyAction) => {
  switch(type) {
    case LOGIN:
      return { ...state, ...payload }

    default:
      return state
  }
}

export default reducer
