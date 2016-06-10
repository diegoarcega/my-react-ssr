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
					<ProfileCardHeader Styles={Styles} title={this.props.title} image={this.props.image} />					
					<ProfileCardBody Styles={Styles}/>					
					<ProfileCardFooter Styles={Styles}/>					
				</div>
			)
	}
}

export default ProfileCard