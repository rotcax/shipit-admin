import { actionObject } from '@utils';
import { CREATE_SHIPMENT } from './action-types'

export const createShipment = payload => actionObject(CREATE_SHIPMENT, payload)
