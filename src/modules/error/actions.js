import constants from './constants'

export function clearError () {
  return {
    type: constants.CLEAR_ERROR
  }
}

export function recordError (error) {
  return {
    type: constants.RECORD_ERROR,
    payload: error
  }
}
