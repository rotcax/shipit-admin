import { actionObject } from '@utils';
import { CREATE_SHIPMENT, SET_COURIER_VALUES, SET_DESTINY_VALUES, SET_INSURANCE_VALUES, SET_SELLER_VALUES, SET_SIZES_VALUES, CLEAR_SHIPMENT_FORM } from './action-types'

export const createShipment = payload => actionObject(CREATE_SHIPMENT, payload)

export const setDestinyValues = payload => {
  const destiny = { ...payload }
  return actionObject(SET_DESTINY_VALUES, { destiny })
}

export const setSizesValues = payload => {
  const sizes = { ...payload }
  return actionObject(SET_SIZES_VALUES, { sizes })
}

export const setSellerValues = ({ seller_id, name }) => {
  const seller = {
    id: seller_id,
    name
  }
  return actionObject(SET_SELLER_VALUES, { seller })
}

export const setCourierValues = payload => {
  const courier = { ...payload }
  return actionObject(SET_COURIER_VALUES, { courier })
}

export const setInsuranceValues = payload => {
  const insurance = { ...payload }
  return actionObject(SET_INSURANCE_VALUES, { insurance })
}

export const clearShipmentForm = () => actionObject(CLEAR_SHIPMENT_FORM)
