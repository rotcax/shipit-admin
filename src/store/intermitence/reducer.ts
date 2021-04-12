import { AnyAction } from 'redux'
import { SAVE_CURRENT_PATH } from './action-types'
import { LOGOUT } from '../auth/action-types'

const initialState = {
  currentPath: '/'
}

const reducer = (state = initialState, { type, payload }: AnyAction) => {
  switch(type) {
    case SAVE_CURRENT_PATH:
      return { ...state, ...payload }

    case LOGOUT:
      return initialState

    default:
      return state
  }
}

export default reducer
