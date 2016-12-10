import React, { PropTypes } from 'react'
import Snackbar from 'material-ui/Snackbar'

const ErrorSnackbar = ({open, message, onClose}) => (
  <Snackbar
    open={open}
    message={message}
    bodyStyle={{backgroundColor: '#D36E70'}}
    autoHideDuration={4000}
    onRequestClose={onClose}
  />
)

ErrorSnackbar.propTypes = {
  open: PropTypes.bool,
  message: PropTypes.string,
  onClose: PropTypes.func
}

export default ErrorSnackbar
