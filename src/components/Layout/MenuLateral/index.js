import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { push } from 'routing/actions'
import { partial } from 'ramda'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'

import HomeIcon from 'material-ui/svg-icons/action/home'
import SearchIcon from 'material-ui/svg-icons/action/search'
import PersonIcon from 'material-ui/svg-icons/social/person'

import './MenuLateral.css'

const MenuLateral = ({push}) => (
  <div className='MenuLateral'>
    <MenuItem
      className="MenuItem"
      primaryText='Home'
      leftIcon={<HomeIcon />}
    />
    <MenuItem
      className="MenuItem"
      onTouchTap={partial(push, ['/administrar-a'])}
      primaryText='Administrar Usuarios'
      leftIcon={<SearchIcon />}
    />
    <Divider />
    <MenuItem
      className="MenuItem"
      onTouchTap={partial(push, ['/administrar-b'])}
      primaryText='Administrar Busquedas'
      leftIcon={<PersonIcon />}
    />
  </div>
)

MenuLateral.propTypes = {
  push: PropTypes.func
}

const bindActionCreators = {
  push
}

export default connect(null, bindActionCreators)(MenuLateral)
