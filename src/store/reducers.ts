import { combineReducers } from 'redux'
import auth from './auth/reducer'
import commune from './commune/reducer'
import courier from './courier/reducer'

const store = combineReducers({
  auth,
  commune,
  courier
})

export default store
