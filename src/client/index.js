import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { match } from 'react-router'

import routes from './routes'



match({ history, routes }, (error, redirectLocation, renderProps) => {
  render(<Router {...renderProps} />, document.getElementById('root'))
})
