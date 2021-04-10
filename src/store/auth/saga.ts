import { takeLatest, call, put, select } from 'redux-saga/effects'
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

    if(!user) throw 'Invalid user'
    if(user.password != password) throw 'Invalid password'

    yield call(getCommunesAsync)
    yield call(getCouriersAsync)

    yield put(actionObject(LOGIN_ASYNC, {
      hasRemember: remember,
      accessToken: user.accessToken,
      email: user.email
    }))

  } catch (error) {
		console.log(error)
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
      accessToken: currentIsAuth
    }))

  } catch (error) {
		console.log(error)
  }
}

export function* watchLogin() {
  yield takeLatest(LOGIN, loginAsync)
}

export function* watchLogout() {
  yield takeLatest(LOGOUT, logoutAsync)
}
