import React, { PropTypes } from 'react'
import { reduxForm, Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton'

import Captcha from 'components/Authentication/Captcha'
import './FormLogin.css'

const FormLogin = ({submitting, pristine, invalid, handleSubmit, loadedCaptcha,
                    validCaptcha, captchaUrl, refreshCaptcha}) => (
  <div className='Container'>
    <form onSubmit={handleSubmit} className='FormLogin'>
      <Field
        name='username'
        fullWidth
        className='UsernameField'
        floatingLabelText='Username'
        component={TextField}
      />
      <Field
        name='password'
        fullWidth
        floatingLabelText='Contraseña'
        type='password'
        component={TextField}
      />
      <Field
        name='captcha'
        fullWidth
        loadedCaptcha={loadedCaptcha}
        validCaptcha={validCaptcha}
        imageUrl={captchaUrl}
        refresh={refreshCaptcha}
        component={Captcha}
      />
      <RaisedButton
        className='Submit'
        primary
        label='Ingresar'
        type='submit'
        disabled={pristine || submitting || invalid}
      />
    </form>
  </div>
)

FormLogin.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loadedCaptcha: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  captchaUrl: PropTypes.string.isRequired,
  validCaptcha: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  refreshCaptcha: PropTypes.func.isRequired
}

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Requerido'
  }

  if (!values.password) {
    errors.password = 'Requerido'
  }

  if (!values.captcha) {
    errors.captcha = 'Requerido'
  }

  return errors
}

export default reduxForm({
  form: 'LoginForm',
  validate
})(FormLogin)

