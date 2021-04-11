import { takeLatest, call, put, select } from 'redux-saga/effects'
import { AnyAction } from 'redux'
import { actionObject, fetchService } from '@utils'
import { rates } from '@utils/path'
import { CREATE_RATE, CREATE_RATE_ASYNC } from './action-types'
import { SET_SHIPMENT_VALUES } from '../shipment/action-types'
import { getAuth, getCourier } from '../selectors'

export function* createRateAsync({ payload }: AnyAction) {
  try {
    const { email, accessToken } = yield select(getAuth)
    const parcel = {
      ...payload,
      type_of_destiny: 'domicilio',
      algorithm: '1',
      algorithm_days: '1'
    }

		const response = yield call(fetchService, rates, 'POST', { parcel }, { email, accessToken })
    yield put(actionObject(CREATE_RATE_ASYNC, { betterPrice: response }))

    const { length, width, height, weight, destiny_id } = payload
    const { lower_price: { courier: { name } } } = response
    const { couriers } = yield select(getCourier)

    const sizes = { length, width, height, weight }
    const destiny = { commune_id: destiny_id }

    const currentCourier = couriers.find(courier => courier.name.toLowerCase() == name)
    const courier = {
      client: currentCourier.name,
      id: currentCourier.id
    }

    yield put(actionObject(SET_SHIPMENT_VALUES, {
      sizes,
      courier,
      destiny
    }))

  } catch (error) {
		yield put(actionObject(CREATE_RATE_ASYNC, { betterPrice: null }))
  }
}

export function* watchCreateRate() {
  yield takeLatest(CREATE_RATE, createRateAsync)
}
