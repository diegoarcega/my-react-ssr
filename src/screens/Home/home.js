import React from 'react'
import ReactDOM from 'react-dom'

import Column from 'components/column'
import Classes from './style.css'

import DiegoImage from 'assets/img/diego.jpg'

class Home extends React.Component{
	render(){
		return(
			<div>
				<Column>
				<div className="profileCard">
					<div className="profileCard-header">
						<img className="profileCard-photo" src={DiegoImage} alt="Flavio"/>
						<p className="profileCard-title">Flavio</p>
					</div>
					<div className="profileCard-body">
						<p>my bio</p>
					</div>
					<div className="profileCard-footer">
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
				</div>
			</Column>
			<Column>
				<div className="profileCard">
					<div className="profileCard-header">
						<img className="profileCard-photo" src={DiegoImage} alt="Flavio"/>
						<p className="profileCard-title">Diego Arcega</p>
					</div>
					<div className="profileCard-body">
						<p>my bio</p>
					</div>
					<div className="profileCard-footer">
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
				</div>
			</Column>

			<Column>
				<div className="profileCard">
					<div className="profileCard-header">
						<img className="profileCard-photo" src={DiegoImage} alt="Flavio"/>
						<p className="profileCard-title">Ruan</p>
					</div>
					<div className="profileCard-body">
						<p>my bio</p>
					</div>
					<div className="profileCard-footer">
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
				</div>
			</Column>
			</div>
			)
	}
}

export default Home