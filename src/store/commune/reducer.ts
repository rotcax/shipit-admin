import { AnyAction } from 'redux'
import { CommuneState } from '@types';
import { GET_COMMUNES_ASYNC } from './action-types'
import { LOGOUT } from '../auth/action-types';

const initialState: CommuneState = {
  communes: []
}

const reducer = (state = initialState, { type, payload }: AnyAction) => {
  switch(type) {
    case GET_COMMUNES_ASYNC:
      return { ...state, ...payload }

    case LOGOUT:
      return initialState

    default:
      return state
  }
}

export default reducer
