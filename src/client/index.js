import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
// import createHistory from 'history/lib/createBrowserHistory'
// import createHistory from 'history/lib/createHashHistory'

import routes from './routes'

// let history = createHistory()

//client side, will become app.js
// match({ routes, location, history }, (error, redirectLocation, renderProps) => {
//   render(<Router {...renderProps} />, document.getElementById('root'))
// })

render(<Router history={browserHistory} routes={routes}/>, document.getElementById('root'))
