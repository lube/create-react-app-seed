import React, { PropTypes } from 'react'
import { Match, Redirect } from 'react-router'

const RedirectIfNotAuthenticated = (authenticated, Component) => props => (
  authenticated
  ? (<Component {...props} />)
  : (<Redirect to={{
    pathname: '/login',
    state: { from: props.location }
  }} />)
)

export const MatchWhenAuthorized = ({ component: Component, authenticated, ...rest }) => (
  <Match {...rest} render={RedirectIfNotAuthenticated(authenticated, Component)} />
)


MatchWhenAuthorized.propTypes = {
  component: PropTypes.func,
  authenticated: PropTypes.bool
}
