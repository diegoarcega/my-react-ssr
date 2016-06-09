// React
import React from 'react';
import ReactDOM from 'react-dom';

import definedRoutes from 'routes/index'

// import Layout from 'layout/header'
import Home from 'screens/Home/home'

import 'assets/style/base.css'



class App extends React.Component{
	render(){
		return(
		<div>
			<Home/>
		</div>
		);
	}
}


ReactDOM.render(<App/>, document.getElementById('myApp'));
