import React from 'react'
import ReactDOM from 'react-dom'

import Styles from './style.css'

class ProfileCardFooter extends React.Component{
	render(){
		return(
				<div className={Styles.profileCard_footer}>
						<ul>
							<li>
								<p>my social midias</p>
							</li>
							<li>
								<p>my social midias</p>
							</li>
							<li>
								<p>my social midias</p>
							</li>
						</ul>
					</div>
			)
	}
}

export default ProfileCardFooter