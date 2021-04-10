import { all, fork } from 'redux-saga/effects'
import { watchGetCommunes } from './commune/saga'
import { watchLogin, watchLogout } from './auth/saga'

function* sagas() {
  yield all([
    fork(watchGetCommunes),
    fork(watchLogin),
    fork(watchLogout)
  ])
}

export default sagas
