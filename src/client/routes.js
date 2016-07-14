import React from 'react'
import {Route, Router, IndexRedirect, IndexRoute} from 'react-router'

import Layout from '../server/layout/layout'
import HomeScreen from './screens/Home/home'
import LoginScreen from './screens/Login/Login'
// import TodoScreen from './screens/Todo/Todo'

//shared routes, renderToString and app.js
const routes = (
    <Route path="/" component={Layout}>
       <IndexRoute component={HomeScreen}/>
       <Route path="login" component={LoginScreen} />
       <Route path="home" component={HomeScreen} />
       {/*<Route path="todo" component={TodoScreen} />*/}
       <Route path="*" component={HomeScreen}/>
    </Route>
)

export default routes
