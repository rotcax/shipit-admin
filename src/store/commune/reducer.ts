import { AnyAction } from 'redux'
import { CommuneState } from '@types';
import { GET_COMMUNES } from './action-types'

const initialState: CommuneState = {
  communes: []
}

const reducer = (state = initialState, { type, payload }: AnyAction) => {
  switch(type) {
    case GET_COMMUNES:
      return { ...state, ...payload }

    default:
      return state
  }
}

export default reducer
