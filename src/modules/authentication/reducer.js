import constants from './constants'
import Immutable from 'seamless-immutable'

const initialState = Immutable({
  authenticated: false,
  user: {}
})

export default function loginReducer (state = initialState, action) {
  switch (action.type) {
    case constants.LOGIN_REQUEST:
      return state
    case constants.LOGIN_SUCCESS:
      return state.merge({user: action.payload, authenticated: true})
    case constants.LOGIN_FAILURE:
      return state.merge({user: {}, authenticated: false})
    case constants.LOGOUT:
      return state.merge({user: {}, authenticated: false})
    default:
      return state
  }
}
