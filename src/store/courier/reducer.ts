import { AnyAction } from 'redux'
import { CouriersState } from '@types';
import { GET_COURIERS_ASYNC } from './action-types'
import { LOGOUT } from '../auth/action-types';

const initialState: CouriersState = {
  couriers: []
}

const reducer = (state = initialState, { type, payload }: AnyAction) => {
  switch(type) {
    case GET_COURIERS_ASYNC:
      return { ...state, ...payload }

    case LOGOUT:
      return initialState

    default:
      return state
  }
}

export default reducer
