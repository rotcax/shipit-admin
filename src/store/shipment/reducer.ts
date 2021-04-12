import { AnyAction } from 'redux'
import { LOGOUT } from '../auth/action-types'
import {
  CLEAR_SHIPMENT_FORM,
  CREATE_SHIPMENT_ASYNC,
  SET_COURIER_VALUES,
  SET_DESTINY_VALUES,
  SET_INSURANCE_VALUES,
  SET_SELLER_VALUES,
  SET_SHIPMENT_VALUES,
  SET_SIZES_VALUES,
  CHANGE_SHIPMENT_DONE
} from './action-types'

const initialState = {
  shipmentDone: false,
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
        currentForm: {
          sizes: {...payload.sizes},
          courier: {...payload.courier},
          destiny: {...payload.destiny}
        }
      }

    case SET_DESTINY_VALUES:
      return {
        ...state,
        currentForm: {
          ...state.currentForm,
          destiny: {...payload.destiny}
        }
      }

    case SET_SIZES_VALUES:
      return {
        ...state,
        currentForm: {
          ...state.currentForm,
          sizes: {...payload.sizes}
        }
      }

    case SET_SELLER_VALUES:
      return {
        ...state,
        currentForm: {
          ...state.currentForm,
          seller: {...payload.seller}
        }
      }

    case SET_COURIER_VALUES:
      return {
        ...state,
        currentForm: {
          ...state.currentForm,
          courier: {...payload.courier}
        }
      }

    case SET_INSURANCE_VALUES:
      return {
        ...state,
        currentForm: {
          ...state.currentForm,
          insurance: {...payload.insurance}
        }
      }

    case CLEAR_SHIPMENT_FORM:
      return {
        ...state,
        currentForm: initialState.currentForm
      }

    case CHANGE_SHIPMENT_DONE:
      return { ...state, ...payload }

    case LOGOUT:
      return initialState

    default:
      return state
  }
}

export default reducer
