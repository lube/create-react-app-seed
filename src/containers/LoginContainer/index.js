import { connect } from 'react-redux'
import { lifecycle, compose } from 'recompose'
import { loginRequest, refreshCaptcha, loadedCaptcha } from 'modules/authentication/actions'

import FormLogin from 'components/Authentication/FormLogin'

const mapActionCreators = {
  onSubmit: loginRequest,
  refreshCaptcha,
  loadedCaptcha
}

const mapStateToProps = (state) => ({
  captchaUrl: state.authentication.captcha_url,
  validCaptcha: state.authentication.valid_captcha
})

const enhancer = compose(
  connect(mapStateToProps, mapActionCreators),
  lifecycle({
    componentWillMount: function () {
      this.props.refreshCaptcha()
    }
  })
)

export default enhancer(FormLogin)
