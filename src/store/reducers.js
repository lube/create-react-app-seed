import { combineReducers } from 'redux'

import router from './../routing/reducer'
import authentication from './../modules/authentication/reducer'
import error from './../modules/error/reducer'
import { reducer as form } from 'redux-form'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    router,
    authentication,
    error,
    form,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
