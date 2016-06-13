import React from 'react'
import ReactDOM from 'react-dom'

import { Link } from 'react-router'

class Nav extends React.Component{
	render(){
		return(
				<ul className="list-inline">
						<li className="list-inline-item"><Link to="/home">home</Link></li>
						<li className="list-inline-item"><Link to="/login">Login</Link></li>
						<li className="list-inline-item"><Link to="/signup">Signup</Link></li>
				</ul>
				)
	}
}

export default Nav