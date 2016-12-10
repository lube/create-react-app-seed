import React, { PropTypes } from 'react'
import { Avatar } from 'material-ui'
import AvtImg from './logo.svg'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

import './Header.css'

export const Header = (context) => (
  <div className='Header'>
    <div className='HeaderTop'>
      <div className='HeaderTitle'>
        Material UI
        adminExtendend
      </div>
      <input className='HeaderSearch' type='text' />
      <Avatar className='HeaderTopActions' src={AvtImg} />
    </div>
    <div className='HeaderBottom'>
      <div className='HeaderActions'>
      </div>
    </div>
  </div>
)

export default Header
