import React from 'react'
import {Route, IndexRedirect, IndexRoute} from 'react-router'

import Layout from 'layout/layout'
import HomeScreen from 'screens/Home/home'
import LoginScreen from 'screens/Login/Login'
import SignupScreen from 'screens/Signup/Signup'
import TodoScreen from 'screens/Todo/Todo'
import CraveScreen from 'screens/Crave/Crave'

export default (
	<Route path="/" component={Layout}>
			<IndexRoute component={CraveScreen}/>
      <Route path="/home" component={HomeScreen} />
      <Route path="/login" component={LoginScreen} />
      <Route path="/signup" component={SignupScreen} />
      <Route path="/todo" component={TodoScreen} />
      <Route path="/crave" component={CraveScreen} />
  </Route>
)