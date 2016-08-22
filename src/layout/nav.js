import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'

let anchorStyles = {
    color: '#c0e3ff'
}

const Nav = () => (
  <div>
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
  </div>
)

export default Nav
