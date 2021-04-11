import { combineReducers } from 'redux'
import auth from './auth/reducer'
import commune from './commune/reducer'
import courier from './courier/reducer'
import origin from './origin/reducer'
import rate from './rate/reducer'
import shipment from './shipment/reducer'

const store = combineReducers({
  auth,
  commune,
  courier,
  origin,
  rate,
  shipment
})

export default store
