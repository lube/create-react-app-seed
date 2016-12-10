import React, { PropTypes } from 'react'
import { reduxForm, Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton'

import './FormLogin.css'

const FormLogin = ({submitting, pristine, invalid, handleSubmit}) => (
  <div className='Container'>
    <form onSubmit={handleSubmit} className='FormLogin'>
      <Field
        name='username'
        className='UsernameField'
        floatingLabelText='Username'
        component={TextField}
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
  submitting: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired
}

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Requerido'
  }

  return errors
}

export default reduxForm({
  form: 'LoginForm',
  validate
})(FormLogin)
