import { AnyAction } from 'redux'
import { CREATE_RATE_ASYNC } from './action-types'
import { LOGOUT } from '../auth/action-types';

const initialState = {
  betterPrice: {}
}

const reducer = (state = initialState, { type, payload }: AnyAction) => {
  switch(type) {
    case CREATE_RATE_ASYNC:
      return { ...state, ...payload }

    case LOGOUT:
      return initialState

    default:
      return state
  }
}

export default reducer
