import React from 'react'
import ReactDOM from 'react-dom'

import Styles from './style.css'

class ProfileCardBody extends React.Component{
	render(){
		return(
				<div className={Styles.profileCard_body}>
					<p>my bio</p>
				</div>
			)
	}
}

export default ProfileCardBody