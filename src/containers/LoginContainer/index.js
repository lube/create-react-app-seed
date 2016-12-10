import FormLogin from 'components/Authentication/FormLogin'
import { connect } from 'react-redux'
import { loginRequest } from 'modules/authentication/actions'

const mapDispatchToProps = {
  onSubmit: loginRequest
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.authentication.authenticated
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin)
