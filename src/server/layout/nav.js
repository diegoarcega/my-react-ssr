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

class Nav extends Component {

  constructor(props) {
    super(props)
    this.state = {open: false}
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleToggle(){
    this.setState({open: !this.state.open})
  }

  handleClose(){
    this.setState({open: false})
  }

  render(){

    const closeButton = () => (
      <IconButton onClick={this.handleToggle}>
          <NavigationClose />
      </IconButton>
    )

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
        <AppBar
          title="AppName"
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <div className="mui-container">
          <div className="mui-row">
            <div className="mui-col-xs-12">
              <p></p>
              <ul className="mui-list--unstyled mui-list--inline">
                  <li><IndexLink to="/home" style={anchorStyles} activeClassName="active">Home</IndexLink></li>
                  <li><Link style={anchorStyles} activeClassName="active" to="/login">Login</Link></li>
                  <li><Link style={anchorStyles} activeClassName="active" to="/todo">TodoList</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mui--clearfix"></div>
        <Divider/>
      </div>
    )
  }
}

export default Nav
