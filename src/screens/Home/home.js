import React from 'react'
import ReactDOM from 'react-dom'

import Column from 'components/column/'
import ProfileCard from 'components/profileCard/'

import FlavioIMG from 'assets/img/flavio.jpg'
import DiegoIMG from 'assets/img/diego.jpg'
import RuanIMG from 'assets/img/flavio.jpg'

import { Link } from 'react-router'

const userData = [
			{name: 'Flavio', photo: FlavioIMG },
			{name: 'Diego', photo: DiegoIMG },
			{name: 'Ruan', photo: RuanIMG }
		]


class Home extends React.Component{
	render(){
		return(
			<div>
				{userData.map((user, index) => (
					<Column key={index}>
						<ProfileCard title={user.name} image={user.photo}></ProfileCard>
					</Column>
				))}

			</div>
			)
	}
}


export default Home