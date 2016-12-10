import { combineReducers } from 'redux'

import router from './../routing/reducer'
import authentication from './../modules/authentication/reducer'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    router,
    authentication,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
