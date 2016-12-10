import constants from './constants'
import Immutable from 'seamless-immutable'
import { indexBy, prop } from 'ramda'

const initialState = Immutable({
  empleados: {},
  fetching: false,
  updating: false
})

export default function loginReducer (state = initialState, action) {
  switch (action.type) {
    case constants.EMPLEADOS_REQUEST:
      return state.merge({fetching: true})
    case constants.EMPLEADOS_SUCCESS:
      return state.merge({fetching: false, empleados: indexBy(prop('id'), action.payload)})
    case constants.EMPLEADOS_FAILED:
      return state.merge({fetching: false})
    case constants.EDIT_EMPLEADO_REQUEST:
      return state.merge({updating: true})
    case constants.EDIT_EMPLEADO_SUCCESS:
      return state.merge({updating: false, empleados: {...state.empleados, [action.payload.id]: action.payload}})
    case constants.EDIT_EMPLEADO_FAILED:
      return state.merge({updating: false})
    default:
      return state
  }
}
