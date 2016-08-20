import React from 'react'
import {Route, Router, IndexRedirect, IndexRoute} from 'react-router'

import Layout from './layout/layout'
import HomeScreen from './screens/Home/home'

//shared routes, renderToString and app.js
const routes = (
    <Route path="/" component={Layout}>
       <IndexRoute component={HomeScreen}/>
       <Route path="*" component={HomeScreen}/>
    </Route>
)

export default routes
