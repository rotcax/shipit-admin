import { takeLatest, call, put, select } from 'redux-saga/effects'
import { message } from 'antd';
import { actionObject, fetchService } from '@utils';
import { origins } from '@utils/path';
import { GET_ORIGINS, GET_ORIGINS_ASYNC } from './action-types';
import { getAuth } from '../selectors';

export function* getOriginsAsync() {
  try {
    const { email, accessToken } = yield select(getAuth)

		const response = yield call(fetchService, origins, 'GET', null, { email, accessToken })
    yield put(actionObject(GET_ORIGINS_ASYNC, { origins: response }))

  } catch (error) {
		message.error(error, 5)
  }
}

export function* watchGetOrigins() {
  yield takeLatest(GET_ORIGINS, getOriginsAsync);
}
