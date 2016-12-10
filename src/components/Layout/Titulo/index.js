import React, { PropTypes } from 'react'
import IconButton from 'material-ui/IconButton'
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

import './Titulo.css'

export const Titulo = ({logout, titulo}, context) => (
  <AppBar
    titleStyle={{textAlign: 'center'}}  
    title={
      <div className='Titulo'>
        {titulo}
      </div>
    }
    iconElementLeft={<div />}
    iconElementRight={
      <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Log out" onClick={logout} />
        <MenuItem primaryText="Acerca de" />
      </IconMenu>
      }
    />
)

Titulo.propTypes = {
  logout: PropTypes.func,
  logo: PropTypes.string,
  titulo: PropTypes.string
}

Titulo.contextTypes = {
  muiTheme: React.PropTypes.object.isRequired
}

export default Titulo
