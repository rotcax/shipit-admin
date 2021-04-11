import { takeLatest, call, put, select } from 'redux-saga/effects'
import { actionObject, fetchService } from '@utils';
import { communes } from '@utils/path';
import { GET_COMMUNES, GET_COMMUNES_ASYNC } from './action-types';
import { getCourier } from '../selectors'

export function* getCommunesAsync() {
  try {
    const { couriers } = yield select(getCourier)
		const response = yield call(fetchService, communes)

    const currentCommunes = response.map(commune => {
      const availables = []
      let count = 0

      const couriersAvaibles = commune.couriers_availables
      for (let current in couriersAvaibles) {
        const currentCourier = couriersAvaibles[current]
        if (currentCourier) {
          const courierSelected = couriers.find(courier => courier.name.toLowerCase() == current)
          if (courierSelected) {
            availables[count] = courierSelected
            count++
          }
        }
      }

      commune.currentCouriers = availables
      return commune
    })

    yield put(actionObject(GET_COMMUNES_ASYNC, { communes: currentCommunes }))

  } catch (error) {
		console.log(error);
  }
}

export function* watchGetCommunes() {
  yield takeLatest(GET_COMMUNES, getCommunesAsync);
}
