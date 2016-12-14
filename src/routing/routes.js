import React, { PropTypes } from 'react'
import { Match } from 'react-router'
import { connect } from 'react-redux'
import { MatchWhenAuthorized, MatchWithLayout } from './helpers'
import PublicLayout from 'layouts/PublicLayout'
import AdminLayout from 'layouts/AdminLayout'
import Login from 'containers/LoginContainer'
import AContainer from 'containers/AdministrarA'
import BContainer from 'containers/AdministrarB'

const ProtectedRoutes = (authenticated) => props => (
  <AdminLayout>
    <MatchWhenAuthorized
      pattern='/admin/administrar-a'
      exactly
      component={AContainer}
      authenticated={authenticated}
    />
    <MatchWhenAuthorized
      pattern='/admin/administrar-b'
      exactly
      component={BContainer}
      authenticated={authenticated}
    />
  </AdminLayout>
)

const Routes = ({authenticated}) => (
  <div>
    <MatchWithLayout
      pattern='/'
      exactly
      component={Login}
      layout={PublicLayout}
    />
    <Match
      pattern='/admin/:ruta'
      component={ProtectedRoutes(authenticated)}
    />
  </div>
)

Routes.propTypes = {
  authenticated: PropTypes.bool
}

const mapStateToProps = (state, ownProps) => {
  return {
    authenticated: state.authentication.authenticated
  }
}

export default connect(mapStateToProps, null)(Routes)
