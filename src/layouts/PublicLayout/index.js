import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { logout } from 'modules/authentication/actions'
import { clearError } from 'modules/error/actions'

import Titulo from 'components/Layout/Titulo'
import ErrorSnackbar from 'components/Layout/ErrorSnackbar'
import Viewport from 'components/Layout/Viewport'

import './PublicLayout.css'

export const PublicLayout = ({ children, authenticated, error, clearError, logout }, context) => (
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
    <div className='PublicLayout' style={{top: context.muiTheme.appBar.height}}>
      <Viewport authenticated={authenticated}>
        {children}
      </Viewport>
    </div>
  </div>
)

PublicLayout.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

PublicLayout.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(PublicLayout)

