import { takeLatest, call, put, select } from 'redux-saga/effects'
import { message } from 'antd'
import { actionObject } from '@utils'
import { users } from '@repository'
import { LOGIN, LOGIN_ASYNC, LOGOUT, LOGOUT_ASYNC } from './action-types'
import { getCommunesAsync } from '../commune/saga'
import { getCouriersAsync } from '../courier/saga'
import { getAuth } from '../selectors'

function* loginAsync({ payload }: any) {
  try {
    const { email, password, remember } = payload
    const user = users.find(user => user.email == email)

    if(!user) throw 'Correo invalido'
    if(user.password != password) throw 'Contraseña invalida'

    message.success('Autenticado con exito', 5)

    yield put(actionObject(LOGIN_ASYNC, {
      hasRemember: remember,
      accessToken: user.accessToken,
      email: user.email
    }))

    yield call(getCouriersAsync)

    yield put(actionObject(LOGIN_ASYNC, {
      isAuth: true
    }))

    yield call(getCommunesAsync)

  } catch (error) {
		message.error(error, 5)
  }
}

function* logoutAsync() {
  try {
    let
      currentEmail = '',
      currentIsAuth = null

    const { email, hasRemember } = yield select(getAuth)
    if(hasRemember) currentEmail = email

    yield put(actionObject(LOGOUT_ASYNC, {
      email: currentEmail,
      accessToken: currentIsAuth,
      isAuth: false
    }))

  } catch (error) {
		message.error(error, 5)
  }
}

export function* watchLogin() {
  yield takeLatest(LOGIN, loginAsync)
}

export function* watchLogout() {
  yield takeLatest(LOGOUT, logoutAsync)
}
