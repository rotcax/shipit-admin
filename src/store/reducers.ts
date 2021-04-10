import { combineReducers } from 'redux'
import auth from './auth/reducer'

const store = combineReducers({
  auth
})

export default store
