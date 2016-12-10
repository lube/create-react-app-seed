import React, { PropTypes } from 'react'
import { Match } from 'react-router'
import { MatchWhenAuthorized } from './helpers'
import Login from './../containers/LoginContainer'
import PaginaA from './../components/PaginaA'
import PaginaB from './../components/PaginaB'

const Routes = ({component, authenticated}) => {
  var Component = component
  return (
    <Component>
      <Match
        pattern='/login'
        exactly
        component={Login}
      />
      <Match
        pattern='/'
        exactly
        component={PaginaA}
      />
      <MatchWhenAuthorized
        pattern='/protected'
        exactly
        component={PaginaB}
        authenticated={authenticated}
      />
    </Component>
  )
}

Routes.propTypes = {
  authenticated: PropTypes.bool,
  component: PropTypes.func
}

export default Routes
