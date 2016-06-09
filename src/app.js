// React
import React from 'react';
import ReactDOM from 'react-dom';

import definedRoutes from 'routes/index'

// import Layout from 'layout/header'
import Home from 'screens/Home/home'



class App extends React.Component{
	render(){
		return(
		<div className="components">
			<Home/>
		</div>
		);
	}
}


ReactDOM.render(<App/>, document.getElementById('myApp'));
