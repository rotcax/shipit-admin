import { takeLatest, call, put, select } from 'redux-saga/effects'
import { actionObject, fetchService } from '@utils';
import { couriers } from '@utils/path';
import { GET_COURIERS, GET_COURIERS_ASYNC } from './action-types';
import { getAuth } from '../selectors';

export function* getCouriersAsync() {
  try {
    const { email, accessToken } = yield select(getAuth)

		const response = yield call(fetchService, couriers, 'GET', null, { email, accessToken })
    yield put(actionObject(GET_COURIERS_ASYNC, { couriers: response }))

  } catch (error) {
		console.log(error);
  }
}

export function* watchGetCouriers() {
  yield takeLatest(GET_COURIERS, getCouriersAsync);
}
