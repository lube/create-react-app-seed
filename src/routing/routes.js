import React, { PropTypes } from 'react'
import { Match } from 'react-router'
import { MatchWhenAuthorized } from './helpers'
import Login from './../containers/LoginContainer'
import PaginaA from './../components/PaginaA'
import PaginaB from './../components/PaginaB'

const Routes = ({component, authenticated}) => {
  var Component = component
  return (
    <Match pattern='/' render={(props) => (
      <Component {...props}>
        <Match pattern='/login' component={Login} />
        <Match pattern='/public' component={PaginaA} />
        <MatchWhenAuthorized pattern='/protected' component={PaginaB} authenticated={authenticated} />
      </Component>
    )} />
  ) 
}

Routes.propTypes = {
  authenticated: PropTypes.bool,
  component: PropTypes.func
}

export default Routes
