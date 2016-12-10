import { NAVIGATE } from './constants'
import createBrowserHistory from 'history/createBrowserHistory'
import Immutable from 'seamless-immutable'

const history = createBrowserHistory()

const initialState = Immutable({
  location: history.location,
  action: history.action
})

export default function routerReducer (state = initialState, action) {
  if (action.type === NAVIGATE) {
    return state.merge({
      location: action.location,
      action: action.action
    })
  } else {
    return state
  }
}
