import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routesShell from './shellRoutes'
// import '../node_modules/muicss/lib/css/mui.min.css'


ReactDOM.render(
	<Router history={browserHistory} routes={routesShell} />,
	document.getElementById('myApp')
);
