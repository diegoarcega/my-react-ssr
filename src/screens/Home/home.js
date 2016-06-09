import React from 'react'
import ReactDOM from 'react-dom'

import Column from 'components/column/'
import ProfileCard from 'components/profileCard/'


class Home extends React.Component{
	render(){
		return(
			<div>
				<Column>
					<ProfileCard></ProfileCard>
				</Column>
				
				<Column>
					<ProfileCard></ProfileCard>
				</Column>

				<Column>
					<ProfileCard></ProfileCard>
				</Column>
			</div>
			)
	}
}

export default Home