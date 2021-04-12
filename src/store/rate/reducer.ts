import { AnyAction } from 'redux'
import { CREATE_RATE_ASYNC, CHANGE_RATE_DONE } from './action-types'
import { LOGOUT } from '../auth/action-types';

const initialState = {
  betterPrice: null,
  rateDone: false
}

const reducer = (state = initialState, { type, payload }: AnyAction) => {
  switch(type) {
    case CREATE_RATE_ASYNC:
      return { ...state, ...payload }

    case CHANGE_RATE_DONE:
      return { ...state, ...payload }

    case LOGOUT:
      return initialState

    default:
      return state
  }
}

export default reducer
