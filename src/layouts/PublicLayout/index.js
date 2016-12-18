import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { logout } from 'modules/authentication/actions'
import { clearError } from 'modules/error/actions'

import Titulo from 'components/Layout/Titulo'
import ErrorSnackbar from 'components/Layout/ErrorSnackbar'
import Viewport from 'components/Layout/Viewport'
import CircularProgress from 'material-ui/CircularProgress';

import './PublicLayout.css'

export const PublicLayout = ({ initialized, children, authenticated, error, clearError, logout }, context) => (
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
    {!initialized &&
    <div className='loadingLayout' style={{top: context.muiTheme.appBar.height}}>
      <CircularProgress size={80} thickness={5} />
    </div>}
    {initialized && 
    <div className='containerLayout' style={{top: context.muiTheme.appBar.height}}>
      <Viewport authenticated={false}>
        {children}
      </Viewport>
    </div>}
  </div>
)

PublicLayout.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

PublicLayout.propTypes = {
  authenticated: PropTypes.bool,
  initialized: PropTypes.bool,
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
    initialized: state.authentication.initialized,
    error: state.error
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PublicLayout)
