import { takeLatest, call, put, select } from 'redux-saga/effects'
import { actionObject, fetchService, makeId } from '@utils'
import { shipments } from '@utils/path'
import { CHANGE_SHIPMENT_DONE, CREATE_SHIPMENT, CREATE_SHIPMENT_ASYNC } from './action-types'
import { getAuth, getCommune, getCourier, getShipment } from '../selectors'

export function* createShipmentAsync() {
  try {
    const { email, accessToken } = yield select(getAuth)
    const { communes } = yield select(getCommune)
    const { couriers } = yield select(getCourier)
    const { currentForm } = yield select(getShipment)

    const shipment = {
      kind: 0,
      platform: 2,
      reference: makeId(15),
      items: currentForm.sizes.items,
      ...currentForm,
      destiny: {
        ...currentForm.destiny,
        commune_name: communes.find(commune => commune.id == currentForm.destiny.commune_id)?.name,
        kind: 'home_delivery'
      },
      courier: {
        ...currentForm.courier,
        id: couriers.find(courier => courier.name == currentForm.courier.client)?.id,
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

    yield put(actionObject(CHANGE_SHIPMENT_DONE, { shipmentDone: false }))

  } catch (error) {
		yield put(actionObject(CREATE_SHIPMENT_ASYNC, {
      result: error?.response?.data?.message,
      shipmentDone: true
    }))
    yield put(actionObject(CHANGE_SHIPMENT_DONE, { shipmentDone: false }))
  }
}

export function* watchCreateShipment() {
  yield takeLatest(CREATE_SHIPMENT, createShipmentAsync)
}
