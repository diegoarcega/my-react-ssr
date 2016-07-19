import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import routes from './routes'

let store = configureStore()

render(
    <Provider store={store}>
      <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root')
   )



// let history = createHistory()
//client side, will become app.js
// match({ routes, location, history }, (error, redirectLocation, renderProps) => {
//   render(<Router {...renderProps} />, document.getElementById('root'))
// })
