import React, { PropTypes } from 'react'
import { Avatar } from 'material-ui'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import SearchIcon from 'material-ui/svg-icons/action/search'
import AppsIcon from 'material-ui/svg-icons/navigation/apps'
import HomeIcon from 'material-ui/svg-icons/action/home'
import MailIcon from 'material-ui/svg-icons/communication/mail-outline'
import ArrowLeftIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-left'

import './Header.css'

export const Header = ({titulo, subtitulo}, context) => (
  <div className='Header'>
    <div className='HeaderTop'>
      <div className='HeaderTitle'>
        <span className='Title'>
          {titulo}
        </span>
        <span className='Detail'>
          {subtitulo}
        </span>
      </div>
      <div className='HeaderSearchContainer'>
        <div className='HeaderSearch'>
          <SearchIcon className='HeaderSearchIcon' color='#EDECEC' />
          <input className='HeaderSearchInput' type='text' />
        </div>
      </div>
      <div className='HeaderTopActionsContainer'>
        <IconMenu
          className='HeaderTopActions'
          iconButtonElement={<IconButton><AppsIcon color='#EDECEC' /></IconButton>}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText="Log out" />
          <MenuItem primaryText="Acerca de" />
        </IconMenu>
        <IconMenu
          className='HeaderTopActions'
          iconButtonElement={<IconButton><MoreVertIcon color='#EDECEC' /></IconButton>}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText="Log out" />
          <MenuItem primaryText="Acerca de" />
        </IconMenu>
        <Avatar className='Avatar'> A </Avatar>
      </div>
    </div>
    <div className='HeaderBottom'>
      <div className='HeaderActions'>
        <IconButton style={{backgroundColor: '#3FB0A6', borderRadius: 48}} touchRippleColor="#EDECEC">
          <HomeIcon color='#EDECEC' />
        </IconButton>
        <IconButton style={{backgroundColor: '#3FB0A6', borderRadius: 48}} touchRippleColor="#EDECEC">
          <MailIcon color='#EDECEC' />
        </IconButton>
        <IconButton style={{backgroundColor: '#3FB0A6', borderRadius: 48}} touchRippleColor="#EDECEC">
          <ArrowLeftIcon color='#EDECEC' />
        </IconButton>
      </div>
    </div>
  </div>
)

Header.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string
}

export default Header
