import AComp from './components/A'
import { connect } from 'react-redux'

const mapDispatchToProps = {}

const mapStateToProps = (state) => {
  return {
    empleados: state.authentication.authenticated
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AComp)
