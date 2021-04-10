import { combineReducers } from 'redux'
import auth from './auth/reducer'
import commune from './commune/reducer'

const store = combineReducers({
  auth,
  commune
})

export default store
