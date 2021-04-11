import { takeLatest, call, put, select } from 'redux-saga/effects'
import { AnyAction } from 'redux'
import { actionObject, fetchService } from '@utils'
import { shipments } from '@utils/path'
import { CHANGE_SHIPMENT_DONE, CREATE_SHIPMENT, CREATE_SHIPMENT_ASYNC } from './action-types'
import { getAuth, getCommune, getCourier } from '../selectors'

export function* createShipmentAsync({ payload }: AnyAction) {
  try {
    yield put(actionObject(CHANGE_SHIPMENT_DONE, { shipmentDone: true }))

    const { email, accessToken } = yield select(getAuth)
    const { communes } = yield select(getCommune)
    const { couriers } = yield select(getCourier)

    const shipment = {
      ...payload,
      destiny: {
        ...payload.destiny,
        commune_name: communes.find(commune => commune.id == payload.destiny.commune_id)?.name,
        kind: 'home_delivery'
      },
      courier: {
        ...payload.courier,
        id: couriers.find(courier => courier.name == payload.courier.client)?.id,
        selected: false,
        payable: false,
        algorithm: 1,
        algorithm_days: 1,
        without_courier: false
      }
    }

		const response = yield call(fetchService, shipments, 'POST', { shipment }, { email, accessToken })
    yield put(actionObject(CREATE_SHIPMENT_ASYNC, {
      result: response,
      shipmentDone: true
    }))

  } catch (error) {
		yield put(actionObject(CREATE_SHIPMENT_ASYNC, { result: null }))
  }
}

export function* watchCreateShipment() {
  yield takeLatest(CREATE_SHIPMENT, createShipmentAsync)
}
