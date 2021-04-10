import { takeLatest, call, put, select } from 'redux-saga/effects'
import { actionObject, fetchService } from '@utils';
import { communes } from '@utils/path';
import { GET_COMMUNES, GET_COMMUNES_ASYNC } from './action-types';

function* getCommunesAsync() {
  try {
		const response = yield call(fetchService, communes)
    yield put(actionObject(GET_COMMUNES_ASYNC, { communes: response }))

  } catch (error) {
		console.log(error);
  }
}

export function* watchGetCommunes() {
  yield takeLatest(GET_COMMUNES, getCommunesAsync);
}
