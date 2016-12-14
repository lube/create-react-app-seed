import React, { PropTypes } from 'react'
import { Match, Redirect } from 'react-router'

const RedirectIfNotAuthenticated = (authenticated, Component, Layout) => props => (
  authenticated
  ? <Component {...props} />
  : (<Redirect to={{
    pathname: '/',
    state: { from: props.location }
  }} />)
)

const withLayout = (Layout, Component) => props => (
  <Layout>
    <Component />
  </Layout>
)

export const MatchWhenAuthorized = ({ component: Component, authenticated, ...rest }) => (
  <Match {...rest} render={RedirectIfNotAuthenticated(authenticated, Component)} />
)

MatchWhenAuthorized.propTypes = {
  component: PropTypes.func,
  layout: PropTypes.func,
  authenticated: PropTypes.bool
}

export const MatchWithLayout = ({ component: Component, layout: Layout, ...rest }) => (
  <Match {...rest} render={withLayout(Layout, Component)} />
)

MatchWithLayout.propTypes = {
  layout: PropTypes.func,
  component: PropTypes.func
}
