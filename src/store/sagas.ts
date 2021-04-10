import { all, fork } from 'redux-saga/effects'
import { watchLogin, watchLogout } from './auth/saga'
import { watchGetCommunes } from './commune/saga'
import { watchGetCouriers } from './courier/saga'

function* sagas() {
  yield all([
    fork(watchLogin),
    fork(watchLogout),
    fork(watchGetCommunes),
    fork(watchGetCouriers),
  ])
}

export default sagas
