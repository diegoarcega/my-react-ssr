import React from 'react'
import ReactDOM from 'react-dom'

import ProfileCardHeader from './header'
import ProfileCardBody from './body'
import ProfileCardFooter from './footer'

import Styles from './style.scss'

class ProfileCard extends React.Component{
	render(){
		return(
				<div className={Styles.profileCard}>
					<ProfileCardHeader/>					
					<ProfileCardBody/>					
					<ProfileCardFooter/>					
				</div>
			)
	}
}

export default ProfileCard