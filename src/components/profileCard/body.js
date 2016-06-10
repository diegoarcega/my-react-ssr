import React from 'react'
import ReactDOM from 'react-dom'


class ProfileCardBody extends React.Component{
	render(){
		return(
				<div className={this.props.Styles.profileCard_body}>
					<p>my bio</p>
				</div>
			)
	}
}

export default ProfileCardBody