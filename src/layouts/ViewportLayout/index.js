import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { logout } from './../../modules/authentication/actions'
import { clearError } from './../../modules/error/actions'

import Titulo from './../../components/Layout/Titulo'
import ErrorSnackbar from './../../components/Layout/ErrorSnackbar'
import Viewport from './../../components/Layout/Viewport'

import './ViewportLayout.css'

export const ViewportLayout = ({ children, authenticated, error, clearError, logout }, context) => (
  <div>
    <ErrorSnackbar
      open={error.status}
      message={error.message}
      onClose={clearError}
    />
    <Titulo
      logout={logout}
      titulo='Gamorrean'
    />
    <div className='ViewportLayout' style={{top: context.muiTheme.appBar.height}}>
      <Viewport authenticated={authenticated}>
        {children}
      </Viewport>
    </div>
  </div>
)

ViewportLayout.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

ViewportLayout.propTypes = {
  authenticated: PropTypes.bool,
  error: PropTypes.object,
  clearError: PropTypes.func,
  logout: PropTypes.func,
  children: PropTypes.any
}

const mapDispatchToProps = {
  logout,
  clearError
}

const mapStateToProps = (state, ownProps) => {
  return {
    authenticated: state.authentication.authenticated,
    error: state.error
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewportLayout)

