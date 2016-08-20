import React from 'react'
import {Route, Router, IndexRedirect, IndexRoute} from 'react-router'

import Layout from './layout/layout'
import TictactoeScreen from './screens/Tictactoe/Tictactoe.component'

//shared routes, renderToString and app.js
const routes = (
    <Route path="/" component={Layout}>
       <IndexRoute component={TictactoeScreen}/>
       <Route path="*" component={TictactoeScreen}/>
    </Route>
)

export default routes
