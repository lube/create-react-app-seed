import { takeEvery } from 'redux-saga'
import { call, put, fork, race, take } from 'redux-saga/effects'
import { get, post } from 'axios'

import actions from './actions'
import constants from './constants'
import { push } from 'routing/actions'
import { recordError } from 'modules/error/actions'

function* authFlowSaga () {
  while (true) {
    let userSignedIn = yield call(authorize)

    while (userSignedIn) {
      const {check, signout} = yield race({
        check: take(constants.LOGIN_CHECK),
        signout: take(constants.LOGOUT)
      })

      if (check) {
        try {
          yield call(get, '/api/login/check')
        } catch (e) {
          yield put(actions.logout())
          yield put(push('/'))
          userSignedIn = false
        }
      } 
      else {
        if (signout) {
          yield call(post, '/api/logout')
          yield put(actions.logout())
          yield put(push('/'))
          userSignedIn = false
        }
      }
    }
  }
}

function* authorize () {
  const {signin, check} = yield race({
    signin: take(constants.LOGIN_REQUEST),
    check: take(constants.LOGIN_CHECK)
  })

  if (signin) {
    try {
      const response = yield call(post, '/api/login', signin.payload)
      yield put(actions.loginSuccess(response.data, false, '/'))
      yield put(actions.refreshCaptcha())
      return true
    } catch (e) {
      yield put(actions.loginFailure())
      yield put(actions.refreshCaptcha())
      return false
    }
  } 
  else {
    try {
      const response = yield call(get, '/api/login/check')
      yield put(actions.initApp())
      yield put(actions.loginSuccess(response.data, true, check.from))
      return true
    } catch (e) {
      yield put(actions.initApp())
      return false
    }
  }
}


function *loggedInTrigger () {
  yield call(takeEvery, constants.LOGIN_SUCCESS, loggedInEffect)
}

function *loggedInEffect (action) {
  try {
    if (action.redirect) {
      yield put(push(action.destino))
    }
  } catch (response) {
    yield put(recordError(response.data.mensaje))
  }
}

function *captchaTrigger () {
  yield call(takeEvery, constants.REFRESH_CAPTCHA, captchaEffect)
}

function *captchaEffect (action) {
  try {
    yield call(get, '/api/captcha')
    const seed = yield call(Math.random)
    yield put(actions.loadCaptcha(seed))
  } catch (e) {
    yield call(console.log, e)
  }
}

export default function *rootSaga () {
  yield fork(authFlowSaga)
  yield fork(loggedInTrigger)
  yield fork(captchaTrigger)
}
