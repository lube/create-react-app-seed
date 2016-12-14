import React, { PropTypes } from 'react'
import './Viewport.css'

export const Viewport = ({authenticated, children}, context) => (
  <div className={'Viewport'}>
    {children}
  </div>
)

Viewport.propTypes = {
  authenticated: PropTypes.bool,
  children: PropTypes.any
}

Viewport.contextTypes = {
  muiTheme: React.PropTypes.object.isRequired
}

export default Viewport
