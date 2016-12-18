import constants from './constants'

export function initApp (authenticated) {
  return {
    type: constants.INIT_APP
  }
}

export function checkLoginOnServer (pathname) {
  return {
    type: constants.LOGIN_CHECK,
    from: pathname
  }
}

export function refreshCaptcha () {
  return {
    type: constants.REFRESH_CAPTCHA
  }
}

export function loadCaptcha (seed) {
  return {
    type: constants.LOAD_CAPTCHA,
    payload: seed
  }
}

export function loadedCaptcha () {
  return {
    type: constants.LOADED_CAPTCHA
  }
}

export function loginRequest (credentials) {
  return {
    type: constants.LOGIN_REQUEST,
    payload: credentials
  }
}

export function loginSuccess (user, redirect = true, destino) {
  return {
    type: constants.LOGIN_SUCCESS,
    payload: user,
    redirect,
    destino
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

export default {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  refreshCaptcha,
  loadCaptcha,
  loadedCaptcha,
  checkLoginOnServer,
  initApp
}
