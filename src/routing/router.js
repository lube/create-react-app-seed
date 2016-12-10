import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import BrowserRouter from 'react-router-addons-controlled/ControlledBrowserRouter'

import Routes from './routes'
import { NAVIGATE } from './constants'

const history = createBrowserHistory()

class Router extends Component {
  static propTypes = {
    authenticated: PropTypes.bool,
    layout: PropTypes.func,
    location: PropTypes.object,
    action: PropTypes.string,
    dispatch: PropTypes.func
  }

  render () {
    return (
      <BrowserRouter
        history={history}
        location={this.props.location}
        action={this.props.action}
        onChange={(location, action) => {
          if (action === 'SYNC') {
            this.props.dispatch({
              type: NAVIGATE,
              location,
              action: this.props.action
            })
          } else if (!window.block) {
            this.props.dispatch({
              type: NAVIGATE,
              location,
              action
            })
          } else {
            console.log('blocked!') // eslint-disable-line
          }
        }}
      >
        <Routes component={this.props.layout} authenticated={this.props.authenticated} />
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => ({
  location: state.router.location,
  action: state.router.action,
  authenticated: state.authentication.authenticated
})

export default connect(mapStateToProps)(Router)
