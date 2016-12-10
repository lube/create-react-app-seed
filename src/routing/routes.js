import React, { PropTypes } from 'react'
import { MatchWhenAuthorized, MatchWithLayout } from './helpers'
import PublicLayout from 'layouts/PublicLayout'
import AdminLayout from 'layouts/AdminLayout'
import Login from 'containers/LoginContainer'
import AdministrarEmpleados from 'containers/AdministrarEmpleadosContainer'

const Routes = ({authenticated}) => (
  <div>
    <MatchWithLayout
      pattern='/'
      exactly
      component={Login}
      layout={PublicLayout}
    />
    <MatchWhenAuthorized
      pattern='/administrar-empleados'
      exactly
      layout={AdminLayout}
      component={AdministrarEmpleados}
      authenticated={authenticated}
    />
  </div>
)

Routes.propTypes = {
  authenticated: PropTypes.bool
}

export default Routes
