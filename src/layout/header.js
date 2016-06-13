import React from 'react'
import ReactDOM from 'react-dom'

import Styles from './header.scss'
import Nav from './nav'



class Header extends React.Component{
	render(){
		return(
				<div className={Styles.header}>
					<Nav/>
				</div>
			)
	}
}

export default Header