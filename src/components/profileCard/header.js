import React from 'react'
import ReactDOM from 'react-dom'


class ProfileCardHeader extends React.Component{
	render(){
		return(
				<div className={this.props.Styles.profileCard_header}>
					<img className={this.props.Styles.profileCard_photo + ` img-fluid img-rounded`} src={this.props.image} alt={this.props.title} />
					<p className={this.props.Styles.profileCard_title}>{this.props.title}</p>
				</div>
			)
	}
}

export default ProfileCardHeader