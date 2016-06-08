// React
import React from 'react';
import ReactDOM from 'react-dom';

// import Layout from 'layout/header'

// import Home from 'app/screens/home'

import DiegoImage from 'file!assets/img/diego.jpg'


class App extends React.Component{
	render(){
		return(
		<div className="compoents">
			<div className="column">
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
			</div>
			<div className="column">
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
			</div>
			
			<div className="column">
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
			</div>
		</div>


		);
	}
}


ReactDOM.render(<App/>, document.getElementById('myApp'));
