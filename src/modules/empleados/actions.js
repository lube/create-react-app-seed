import constants from './constants'

export function listarEmpleados () {
  return {
    type: constants.EMPLEADOS_REQUEST
  }
}

export function listarEmpleadosSucess (empleados) {
  return {
    type: constants.EMPLEADOS_SUCCESS,
    payload: empleados
  }
}

export function listarEmpleadosFailed (error) {
  return {
    type: constants.EMPLEADOS_FAILED,
    payload: error
  }
}

export function editarEmpleado (empleado) {
  return {
    type: constants.EDIT_EMPLEADO_REQUEST,
    payload: empleado
  }
}

export function editarEmpleadoSuccess (empleado) {
  return {
    type: constants.EDIT_EMPLEADO_SUCCESS,
    payload: empleado
  }
}

export function editarEmpleadoFailed (error) {
  return {
    type: constants.EDIT_EMPLEADO_FAILED,
    payload: error
  }
}

export function invitarEmpleado (empleado) {
  return {
    type: constants.INVITE_EMPLEADO_REQUEST
  }
}

export function invitarEmpleadoSuccess (empleado) {
  return {
    type: constants.INVITE_EMPLEADO_SUCCESS,
    payload: empleado
  }
}

export function invitarEmpleadoFailed (error) {
  return {
    type: constants.INVITE_EMPLEADO_FAILED,
    payload: error
  }
}

export default {
  invitarEmpleado,
  invitarEmpleadoFailed,
  invitarEmpleadoSuccess,
  editarEmpleado,
  editarEmpleadoFailed,
  editarEmpleadoSuccess,
  listarEmpleados,
  listarEmpleadosFailed,
  listarEmpleadosSucess
}
