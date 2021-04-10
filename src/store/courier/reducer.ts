import { AnyAction } from 'redux'
import { CouriersState } from '@types';
import { GET_COURIERS } from './action-types'

const initialState: CouriersState = {
  couriers: []
}

const reducer = (state = initialState, { type, payload }: AnyAction) => {
  switch(type) {
    case GET_COURIERS:
      return { ...state, ...payload }

    default:
      return state
  }
}

export default reducer
