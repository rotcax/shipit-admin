import { all, fork } from 'redux-saga/effects'
import { watchGetCommunes } from './commune/saga'

function* sagas() {
  yield all([
    fork(watchGetCommunes)
  ]);
}

export default sagas
