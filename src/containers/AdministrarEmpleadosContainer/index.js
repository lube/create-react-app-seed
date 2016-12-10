import AdministrarEmpleados from './components/AdministrarEmpleados'
import { connect } from 'react-redux'
import {
  editarEmpleado,
  enviarInvitacion
} from 'modules/authentication/actions'

const mapDispatchToProps = {
  editarEmpleado,
  enviarInvitacion
}

const mapStateToProps = (state) => {
  return {
    empleados: state.authentication.authenticated
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdministrarEmpleados)
