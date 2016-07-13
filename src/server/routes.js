import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import Layout from './layout/layout'
import HomeScreen from '../client/screens/Home/home'
import LoginScreen from '../client/screens/Login/Login'
// import TodoScreen from '../client/screens/Todo/Todo'


const routes = (
  <Router>
    <Route path="/" component={Layout}>
       <IndexRoute component={HomeScreen}/>
       <Route path="login" component={LoginScreen} />
       <Route path="home" component={HomeScreen} />
       {/*<Route path="todo" component={TodoScreen} />*/}
       <Route path="*" component={HomeScreen}/>
    </Route>
  </Router>
)

export default routes
