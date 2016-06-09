import React from 'react'
import {Route, IndexRoute} from 'react-router'

import HomeScreen from 'screens/Home/home'
import LoginScreen from 'screens/Login/Login'

export default (
	<Route path="/">
      <IndexRoute component={HomeScreen} />
      <Route path="/login" component={LoginScreen} />
  </Route>
);