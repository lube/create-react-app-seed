import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { logout } from 'modules/authentication/actions'
import { clearError } from 'modules/error/actions'


import Header from 'components/Layout/Header'
import ErrorSnackbar from 'components/Layout/ErrorSnackbar'
import MenuLateral from 'components/Layout/MenuLateral'
import Viewport from 'components/Layout/Viewport'

import './AdminLayout.css'

export const AdminLayout = ({ children, authenticated, error, clearError, logout }, context) => (
  <div>
    <ErrorSnackbar
      open={error.status}
      message={error.message}
      onClose={clearError}
    />
    <Header
      titulo='Admin'
      subtitulo='Backoffice'
    />
    <div className='AdminLayout'>
      <MenuLateral />
      <Viewport authenticated={authenticated}>
        {children}
      </Viewport>
    </div>
  </div>
)

AdminLayout.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

AdminLayout.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminLayout)

