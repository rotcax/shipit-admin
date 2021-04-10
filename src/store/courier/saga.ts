import { takeLatest, call, put } from 'redux-saga/effects'
import { actionObject, fetchService } from '@utils';
import { communes } from '@utils/path';
import { GET_COURIERS, GET_COURIERS_ASYNC } from './action-types';

export function* getCouriersAsync() {
  try {
		const response = yield call(fetchService, communes)
    yield put(actionObject(GET_COURIERS_ASYNC, { couriers: response }))

  } catch (error) {
		console.log(error);
  }
}

export function* watchGetCouriers() {
  yield takeLatest(GET_COURIERS, getCouriersAsync);
}
