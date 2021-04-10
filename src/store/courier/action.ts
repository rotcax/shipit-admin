import { actionObject, fetchService } from '@utils';
import { couriers } from '@utils/path';
import { GET_COURIERS } from './action-types'

export const getCouriers = () => async dispatch => {
  try {
    const response = await fetchService(couriers)
    dispatch(actionObject(GET_COURIERS, { couriers: response }))

  } catch (e) {
    console.log(e);
  }
}
