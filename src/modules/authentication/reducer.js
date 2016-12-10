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
    case constants.LOGIN:
      return state.merge({user: action.payload, authenticated: true})
    case constants.LOGOUT:
      return state.merge({authenticated: false})
    default:
      return state
  }
}
