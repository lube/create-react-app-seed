import React, { PropTypes } from 'react'
import { Redirect } from 'react-router'
import Match from './match.js'
import { connect } from 'react-redux'

import { MatchDecorated, MatchWithLayout, MissDecorated } from './helpers'
import { checkLoginOnServer as checkLogin } from 'modules/authentication/actions'

import PublicLayout from 'layouts/PublicLayout'
import AdminLayout from 'layouts/AdminLayout'

import Login from 'containers/LoginContainer'
import AContainer from 'containers/AdministrarA'
import BContainer from 'containers/AdministrarB'
import HomeContainer from 'containers/Home'

const AdminPaths = ['/administrar-b', '/administrar-a', '/']

const AdminRoutes = ({checkLogin, from}) => (
  <AdminLayout>
    <MatchDecorated
      pattern='/'
      exactly
      component={HomeContainer}
      checkLogin={checkLogin}
      location={from}
    />
    <MatchDecorated
      pattern='/administrar-b'
      exactly
      component={AContainer}
      checkLogin={checkLogin}
      location={from}
    />
    <MatchDecorated
      pattern='/administrar-a'
      exactly
      component={BContainer}
      checkLogin={checkLogin}
      location={from}
    />
    <MissDecorated
      location={location}
      checkLogin={checkLogin}
      component={() => <Redirect to='/' />}
    />
  </AdminLayout>
)

const Admin = ({checkLogin, from, ...rest}) => (
  <Match exactly passProps={{checkLogin, from}} pattern={AdminPaths} component={AdminRoutes} {...rest} />
)

const Routes = ({authenticated, securityRole, checkLogin, location}) => (
  <div>
    { !authenticated &&
      <MatchWithLayout
        pattern='/'
        exactly
        component={Login}
        layout={PublicLayout}
        location={location}
        checkLogin={checkLogin}
      />
    }
    { securityRole === 'ROLE_ORGANIZADOR' && authenticated &&
      <Admin checkLogin={checkLogin} from={location} />
    }   
    <MissDecorated
      location={location}
      checkLogin={checkLogin}
      component={() => <Redirect to='/' />}
    />
  </div>
)

Routes.propTypes = {
  authenticated: PropTypes.bool,
  securityRole: PropTypes.string,
  checkLogin: PropTypes.func
}

const mapStateToProps = (state, ownProps) => {
  return {
    authenticated: state.authentication.authenticated,
    securityRole: state.authentication.security_role,
    location: state.router.location.pathname
  }
}

const mapDispatchToProps = {
  checkLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
