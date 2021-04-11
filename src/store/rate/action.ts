import { actionObject } from '@utils';
import { CREATE_RATE } from './action-types'

export const createRate = payload => actionObject(CREATE_RATE, payload)
