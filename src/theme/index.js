import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import colors from './palette'

const Theme = ({children, styles}) => (
  <MuiThemeProvider muiTheme={getMuiTheme(styles)}>
    {children}
  </MuiThemeProvider>
)

const mapStateToProps = (state) => ({
  styles: colors[state.authentication.role]
})

Theme.propTypes = {
  styles: React.PropTypes.object,
  children: PropTypes.any
}

export default connect(mapStateToProps, null)(Theme)

