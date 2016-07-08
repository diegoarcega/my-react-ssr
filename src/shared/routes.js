import React from 'react'
import {Route, Router} from 'react-router'
import createHistory from 'history/lib/createMemoryHistory'

import Layout from './layout/layout'

export default (
  <Router history={createHistory()}>
    <Route path="/" component={Layout}></Route>
  </Router>
)
