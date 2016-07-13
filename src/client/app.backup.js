import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
// import { Router } from 'react-router'
import createHistory from 'history/lib/createHashHistory'
// import { Provider } from 'react-redux'
// import configureStore from './redux/configureStore'
// import routes from './routes'


// let store = configureStore()

import {Route, Router, browserHistory, IndexRedirect, IndexRoute} from 'react-router'
import Layout from '../server/layout/layout'
import HomeScreen from './screens/Home/home'
import LoginScreen from './screens/Login/Login'
import TodoScreen from './screens/Todo/Todo'



ReactDOM.render(

		<Router history={createHistory()}>
			<Route path="/" component={Layout}>
				<IndexRoute component={HomeScreen}/>
				<Route path="home" component={HomeScreen} />
				<Route path="login" component={LoginScreen} />
				<Route path="todo" component={TodoScreen} />
				<Route path="*" component={HomeScreen}/>
			</Route>
		</Router>
	,
	document.getElementById('myApp')
)


// ReactDOM.render(
// 	<Provider store={store}>
// 		<Router history={createHistory()} routes={routes} />
// 	</Provider>,
// 	document.getElementById('myApp')
// )
