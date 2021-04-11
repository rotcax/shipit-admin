import { combineReducers } from 'redux'
import auth from './auth/reducer'
import commune from './commune/reducer'
import courier from './courier/reducer'
import origin from './origin/reducer'

const store = combineReducers({
  auth,
  commune,
  courier,
  origin
})

export default store
