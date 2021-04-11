import { AnyAction } from 'redux'
import { CREATE_SHIPMENT_ASYNC, SET_SHIPMENT_VALUES } from './action-types'
import { LOGOUT } from '../auth/action-types';

const initialState = {
  result: null,
  currentForm: {
    sizes: {},
    courier: {},
    destiny: {}
  }
}

const reducer = (state = initialState, { type, payload }: AnyAction) => {
  switch(type) {
    case CREATE_SHIPMENT_ASYNC:
      return { ...state, ...payload }

    case SET_SHIPMENT_VALUES:
      return {
        ...state,
        form: {
          sizes: {...payload.sizes},
          courier: {...payload.courier},
          destiny: {...payload.destiny}
        }
      }

    case LOGOUT:
      return initialState

    default:
      return state
  }
}

export default reducer
