import { takeEvery } from 'redux-saga'
import { call, put, fork } from 'redux-saga/effects'
import actions from './actions'
import constants from './constants'

function *listarEmpleadosTrigger () {
  yield call(takeEvery, constants.EMPLEADOS_REQUEST, listarEmpleadosEffect)
}

function *listarEmpleadosEffect (action) {
  try {
    let mockResponse = {data: [{id: 1, nombre: 'Sebastian Luberriaga', cuil: '20342620931'}]}
    // const response = yield call(axios.post, '/api/login', action.payload)
    const response = yield call(() => mockResponse)
    yield put(actions.listarEmpleadosSucess(response.data))
  } catch (response) {
    yield put(actions.listarEmpleadosFailed())
  } finally {
  }
}

function *editarEmpleadoTrigger () {
  yield call(takeEvery, constants.EDIT_EMPLEADO_REQUEST, editarEmpleadoEffect)
}

function *editarEmpleadoEffect (action) {
  try {
    let mockResponse = {data: [{id: 1, nombre: 'Sebastian Luberriaga', cuil: '20342620932'}]}
    // const response = yield call(axios.post, '/api/login', action.payload)
    const response = yield call(() => mockResponse)
    yield put(actions.editarEmpleadoSuccess(response.data))
  } catch (response) {
    yield put(actions.editarEmpleadoFailed())
  } finally {
  }
}

function *invitarEmpleadoTrigger () {
  yield call(takeEvery, constants.EMPLEADOS_REQUEST, invitarEmpleadoEffect)
}

function *invitarEmpleadoEffect (action) {
  try {
    let mockResponse = {data: [{id: 2, nombre: 'Christian Cortalezzi', cuil: '20342620935'}]}
    // const response = yield call(axios.post, '/api/login', action.payload)
    const response = yield call(() => mockResponse)
    yield put(actions.invitarEmpleadoSuccess(response.data))
  } catch (response) {
    yield put(actions.invitarEmpleadoFailed())
  } finally {
  }
}

export default function *rootSaga () {
  yield fork(listarEmpleadosTrigger)
  yield fork(editarEmpleadoTrigger)
  yield fork(invitarEmpleadoTrigger)
}
