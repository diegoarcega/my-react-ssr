import React from 'react'
import ReactDOM from 'react-dom'

import Column from 'components/column/'
import ProfileCard from 'components/profileCard/'

import { Link } from 'react-router'
const styles = {'textAlign':'center'};

class Home extends React.Component{
	render(){
		return(
			<div>
				<p style={styles}><Link to="/login">go to Login screen</Link></p>
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