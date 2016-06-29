import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import routes from './routes'
import configureStore from './redux/configureStore'
import '../node_modules/muicss/lib/css/mui.min.css'

let store = configureStore()



ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.getElementById('myApp')
);
