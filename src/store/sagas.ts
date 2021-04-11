import { all, fork } from 'redux-saga/effects'
import { watchLogin, watchLogout } from './auth/saga'
import { watchGetCommunes } from './commune/saga'
import { watchGetCouriers } from './courier/saga'
import { watchGetOrigins } from './origin/saga'
import { watchCreateRate } from './rate/saga'

function* sagas() {
  yield all([
    fork(watchLogin),
    fork(watchLogout),
    fork(watchGetCommunes),
    fork(watchGetCouriers),
    fork(watchGetOrigins),
    fork(watchCreateRate)
  ])
}

export default sagas
