import constants from './constants'
import Immutable from 'seamless-immutable'

const initialState = Immutable({
  status: false,
  message: ''
})

export default function errorReducer (state = initialState, action) {
  switch (action.type) {
    case constants.CLEAR_ERROR:
      return state.merge({status: true, message: action.payload})
    case constants.RECORD_ERROR:
      return state.merge({status: false, message: ''})
    default:
      return state
  }
}
