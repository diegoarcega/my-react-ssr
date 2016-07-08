import React from 'react'
import {Route, IndexRoute, Router} from 'react-router'
import createHistory from 'history/lib/createMemoryHistory'
import Layout from './layout/layout'

import HomeScreen from '../client/screens/Home/home'
import LoginScreen from '../client/screens/Login/Login'
import TodoScreen from '../client/screens/Todo/Todo'

const routes = (
<Router history={createHistory()}>
  <Route path="/" component={Layout}>
     <IndexRoute component={HomeScreen}/>
     <Route path="home" component={HomeScreen} />
     <Route path="login" component={LoginScreen} />
     <Route path="todo" component={TodoScreen} />
     <Route path="*" component={HomeScreen}/>
  </Route>
</Router>
)


export default routes
