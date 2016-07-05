import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import RaisedButton from 'material-ui/RaisedButton';


class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false, value: 3}
  }

  handleToggle(){
    this.setState({open: !this.state.open})
  }

  handleClose(){
    this.setState({open: false})
  }

  render(){

    const closeButton = () => (
      <IconButton onClick={this.handleToggle.bind(this)}>
          <NavigationClose />
      </IconButton>
    )
    const toolbarStyles = {
      background: "url('http://wallpapercave.com/wp/dZpV8Ra.gif')"
    }
    return (
      <div>
        <Drawer open={this.state.open} docked={false}>
          <AppBar
            title="Menu"
            showMenuIconButton={false}
            iconElementRight={closeButton()}
          />
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>

        {/*<Toolbar style={toolbarStyles}>
          <ToolbarGroup firstChild={true}>*/}
            {/*<RaisedButton label="Menu" onClick={this.handleToggle.bind(this)} primary={true} />*/}
          {/*</ToolbarGroup>
          <ToolbarGroup>
            <RaisedButton label="Add new post" primary={true} />
          </ToolbarGroup>
        </Toolbar>*/}
      </div>
    )
  }
}

export default Nav
