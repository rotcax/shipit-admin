import { actionObject, fetchService } from '@utils';
import { communes } from '@utils/path';
import { GET_COMMUNES } from './action-types'

export const getCommunes = () => async dispatch => {
  try {
    const response = await fetchService(communes)
    dispatch(actionObject(GET_COMMUNES, { communes: response }))

  } catch (e) {
    console.log(e);
  }
}
