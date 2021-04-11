import { AnyAction } from 'redux';
import { actionObject } from '@utils';
import { GET_COMMUNES } from './action-types'

export const getCommunes = (): AnyAction => actionObject(GET_COMMUNES)
