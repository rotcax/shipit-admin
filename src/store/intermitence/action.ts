import { actionObject } from '@utils';
import { SAVE_CURRENT_PATH } from './action-types';

export const saveCurrentPath = (currentPath: string) => actionObject(SAVE_CURRENT_PATH, { currentPath })
