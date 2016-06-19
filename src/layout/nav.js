import React from 'react'
import ReactDOM from 'react-dom'

import { Link, IndexLink } from 'react-router'

class Nav extends React.Component{
	render(){
		return(
				<nav className="navbar navbar-full navbar-dark bg-primary">
					<div className="container">
					<ul className="nav navbar-nav">
							<li className="nav-item"><IndexLink to="/home" className="nav-link" activeClassName="active">Home</IndexLink></li>
							<li className="nav-item"><Link className="nav-link" activeClassName="active" to="/todo">TodoList</Link></li>
							<li className="nav-item"><Link className="nav-link" activeClassName="active" to="/login">Login</Link></li>
							<li className="nav-item"><Link className="nav-link" activeClassName="active" to="/signup">Signup</Link></li>
							<li className="nav-item"><Link className="nav-link" activeClassName="active" to="/crave">Crave</Link></li>
					</ul>
					</div>
				</nav>
				)
	}
}

export default Nav