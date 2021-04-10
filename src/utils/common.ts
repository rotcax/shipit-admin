import { AnyAction } from 'redux';

export const actionObject = (type: string, payload = null): AnyAction => ({ type, payload })
