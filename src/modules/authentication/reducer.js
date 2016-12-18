import constants from './constants'
import Immutable from 'seamless-immutable'

const initialState = Immutable({
  initialized: false,
  authenticated: false,
  usuario: {},
  security_role: 'NONE',
  captcha_url: '',
  valid_captcha: false
})

const ACTION_HANDLERS = {
  [constants.INIT_APP]: (state, action) => (
    state.merge({
      initialized: true
    })
  ),
  [constants.LOAD_CAPTCHA]: (state, action) => (
    state.merge({
      captcha_url: '/api/captcha/generate-captcha/gcb_captcha?random=' + action.payload
    })
  ),
  [constants.LOADED_CAPTCHA]: (state, action) => (
    state.merge({
      valid_captcha: true
    })
  ),
  [constants.REFRESH_CAPTCHA]: (state, action) => state.merge({valid_captcha: false}),
  [constants.LOGIN_ATTEMPT]: (state, action) => state,
  [constants.LOGIN_SUCCESS]: (state, action) => (
    state.merge({
      authenticated: true,
      usuario: action.payload.username,
      security_role: action.payload.roles.length > 0 ? action.payload.roles[0] : 'NONE',
      valid_captcha: false
    })
  ),
  [constants.LOGIN_FAILED]: (state, action) => (
    state.merge({
      authenticated: false,
      usuario: null,
      security_role: 'NONE'
    })
  ),
  [constants.LOGOUT]: (state, action) => (
    state.merge({
      authenticated: false,
      usuario: null,
      security_role: 'NONE'
    })
  )
}

export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
