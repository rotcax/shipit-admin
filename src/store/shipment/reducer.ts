import { AnyAction } from 'redux'
import { CREATE_SHIPMENT_ASYNC } from './action-types'
import { LOGOUT } from '../auth/action-types';

const initialState = {
  result: null,
  form: {
    sizes: {},
    courier: {},
    destiny: {}
  }
}

const reducer = (state = initialState, { type, payload }: AnyAction) => {
  switch(type) {
    case CREATE_SHIPMENT_ASYNC:
      return { ...state, ...payload }

    case LOGOUT:
      return initialState

    default:
      return state
  }
}

export default reducer
