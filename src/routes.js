import React from 'react'
import {Route, IndexRedirect, IndexRoute} from 'react-router'

import Layout from 'layout/layout'
import HomeScreen from 'screens/Home/home'


export default (
	<Route path="/" component={Layout}>
			<IndexRoute component={HomeScreen}/>
      <Route path="/home" component={HomeScreen} />
  </Route>
)
