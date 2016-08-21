import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import Divider from 'material-ui/Divider'
import { Link, IndexLink } from 'react-router'

let anchorStyles = {
    color: '#c0e3ff'
}

const Nav = () => (
  <div>
    <AppBar title="TicTacToe" showMenuIconButton={false}/>
    <div className="mui-container">
      <div className="mui-row">
        <div className="mui-col-xs-12">
          <p></p>
          <ul className="mui-list--unstyled mui-list--inline">
              <li><IndexLink to="/home" style={anchorStyles} activeClassName="active">Home</IndexLink></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="mui--clearfix"></div>
    <Divider/>
  </div>
)

export default Nav
