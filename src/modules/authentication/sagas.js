import { takeEvery } from 'redux-saga'
import { call, put, fork } from 'redux-saga/effects'
import { loginSuccess, loginFailure } from './actions'
import constants from './constants'
import { push } from 'routing/actions'

export function *authTrigger () {
  yield call(takeEvery, constants.LOGIN_REQUEST, authEffect)
}

export function *authEffect (action) {
  try {
    let mockResponse = {data: {username: 'Seba Lube', roles: ['CALLCENTER_ROLE']}}
    // const response = yield call(axios.post, '/api/login', action.payload)
    const response = yield call(() => mockResponse)
    yield put(loginSuccess(response.data))
    yield put(push('/administrar-empleados'))
  } catch (response) {
    yield put(loginFailure())
  } finally {
  }
}

export default function *rootSaga () {
  yield fork(authTrigger)
}
