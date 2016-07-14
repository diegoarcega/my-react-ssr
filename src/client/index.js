import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory, browserHistory, match } from 'react-router'

import routes from './routes'

let history = browserHistory

//client side, will become app.js
match({ routes, location, history }, (error, redirectLocation, renderProps) => {
  render(<Router {...renderProps} />, document.getElementById('root'))
})

// render(<Router history={browserHistory} routes={routes}/>, document.getElementById('root'))
