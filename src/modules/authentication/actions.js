import constants from './constants'

export function login (credentials) {
  return {
    type: constants.LOGIN_REQUEST,
    payload: credentials
  }
}

export function loginSuccess (user) {
  return {
    type: constants.LOGIN,
    payload: user
  }
}

export function logout () {
  return {
    type: constants.LOGOUT
  }
}
