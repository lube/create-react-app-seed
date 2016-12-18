import React, { PropTypes } from 'react'
import { Match, Miss } from 'react-router'

export const MissDecorated = ({ component, checkLogin, location, ...rest }) => (
  <Miss {...rest} component={MatchDecoratedFunc(checkLogin, component, location)} />
)

export const MatchDecorated = ({ component, checkLogin, location, ...rest }) => (
  <Match {...rest} component={MatchDecoratedFunc(checkLogin, component, location)} />
)

MatchDecorated.propTypes = {
  component: PropTypes.func,
  location: PropTypes.string,
  checkLogin: PropTypes.func
}

function MatchDecoratedFunc (checkLogin, Component, location) {
  return class MatchDecoratedComponent extends React.Component {

    componentDidMount () {
      checkLogin(location)
    }

    render () {
      return (
        <Component {...this.props} />
      )
    }
  }
}

export const MatchWithLayout = ({ component: Component, layout: Layout, checkLogin, location, ...rest }) => (
  <Match {...rest} component={withLayout(Layout, Component, checkLogin, location)} />
)

MatchWithLayout.propTypes = {
  layout: PropTypes.func,
  component: PropTypes.func
}

function withLayout (Layout, Component, checkLogin, location) {
  return class withLayout extends React.Component {

    componentDidMount () {
      checkLogin(location)
    }

    render () {
      return (
        <Layout>
          <Component {...this.props} />
        </Layout>
      )
    }
  }
}
