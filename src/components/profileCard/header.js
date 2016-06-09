import React from 'react'
import ReactDOM from 'react-dom'

import DiegoImage from 'assets/img/diego.jpg'
import Styles from './style.css'

class ProfileCardHeader extends React.Component{
	render(){
		return(
				<div className={Styles.profileCard_header}>
					<img className={Styles.profileCard_photo} src={DiegoImage} alt="Flavio"/>
					<p className={Styles.profileCard_title}>Diego Arcega</p>
				</div>
			)
	}
}

export default ProfileCardHeader