import { takeLatest, call, put } from 'redux-saga/effects'
import { actionObject, fetchService } from '@utils';
import { communes } from '@utils/path';
import { GET_COMMUNES, GET_COMMUNES_ASYNC } from './action-types';

export function* getCommunesAsync() {
  try {
		const response = yield call(fetchService, communes)

    const currentCommunes = response
    // const currentCommunes = []
    // let count = 0

    // response.forEach(commune => {
    //   if(commune.is_available) {
    //     currentCommunes[count]
    //     count++
    //   }
    // })

    // console.log(currentCommunes);


    yield put(actionObject(GET_COMMUNES_ASYNC, { communes: currentCommunes }))

  } catch (error) {
		console.log(error);
  }
}

export function* watchGetCommunes() {
  yield takeLatest(GET_COMMUNES, getCommunesAsync);
}
