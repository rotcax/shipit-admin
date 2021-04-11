import { takeLatest, call, put, select } from 'redux-saga/effects'
import { AnyAction } from 'redux'
import { actionObject, fetchService } from '@utils'
import { shipments } from '@utils/path'
import { CREATE_SHIPMENT, CREATE_SHIPMENT_ASYNC } from './action-types'
import { getAuth } from '../selectors'

export function* createShipmentAsync({ payload }: AnyAction) {
  try {
    const { email, accessToken } = yield select(getAuth)
    const shipment = {
      ...payload
    }

		const response = yield call(fetchService, shipments, 'POST', { shipment }, { email, accessToken })
    yield put(actionObject(CREATE_SHIPMENT_ASYNC, { result: response }))

  } catch (error) {
		yield put(actionObject(CREATE_SHIPMENT_ASYNC, { result: null }))
  }
}

export function* watchCreateShipment() {
  yield takeLatest(CREATE_SHIPMENT, createShipmentAsync)
}
