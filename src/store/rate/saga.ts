import { takeLatest, call, put, select } from 'redux-saga/effects'
import { AnyAction } from 'redux'
import { actionObject, fetchService } from '@utils'
import { rates } from '@utils/path'
import { CREATE_RATE, CREATE_RATE_ASYNC } from './action-types'
import { getAuth } from '../selectors'

export function* createRateAsync({ payload }: AnyAction) {
  try {
    const { email, accessToken } = yield select(getAuth)
    const parcel = {
      ...payload,
      'type_of_destiny': 'domicilio',
      'algorithm': '1',
      'algorithm_days': '1'
    }

		const response = yield call(fetchService, rates, 'POST', { parcel }, { email, accessToken })
    yield put(actionObject(CREATE_RATE_ASYNC, { betterPrice: response }))

  } catch (error) {
		yield put(actionObject(CREATE_RATE_ASYNC, { betterPrice: {} }))
  }
}

export function* watchCreateRate() {
  yield takeLatest(CREATE_RATE, createRateAsync)
}
