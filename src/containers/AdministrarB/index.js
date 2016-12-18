import BComp from './components/B'
import { connect } from 'react-redux'
import { } from 'modules/authentication/actions'

const mapDispatchToProps = {}

const mapStateToProps = (state) => {
  return {
    empleados: state.authentication.authenticated
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BComp)
