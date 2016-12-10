import constants from './constants'

export function loginRequest (credentials) {
  return {
    type: constants.LOGIN_REQUEST,
    payload: credentials
  }
}

export function loginSuccess (user) {
  return {
    type: constants.LOGIN_SUCCESS,
    payload: user
  }
}

export function loginFailure () {
  return {
    type: constants.LOGIN_FAILURE
  }
}

export function logout () {
  return {
    type: constants.LOGOUT
  }
}
