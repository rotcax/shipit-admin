import { AnyAction } from 'redux'
import { OriginState } from '@types'
import { GET_ORIGINS_ASYNC } from './action-types'
import { LOGOUT } from '../auth/action-types'

const initialState: OriginState = {
  origins: []
}

const reducer = (state = initialState, { type, payload }: AnyAction) => {
  switch(type) {
    case GET_ORIGINS_ASYNC:
      return { ...state, ...payload }

    case LOGOUT:
      return initialState

    default:
      return state
  }
}

export default reducer
