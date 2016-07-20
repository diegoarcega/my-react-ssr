import express from 'express'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Router, Route, match, RouterContext } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from '../src/client/redux/configureStore'
import routes from '../src/client/routes'
import app from './middleware'
import authAPI from './api/auth'
import todosAPI from './api/todos'
import postsAPI from './api/posts'

const DIST_DIR = path.resolve(__dirname + '/../dist')

// apis
app.use('/api/auth', authAPI)
app.use('/api/todos', todosAPI)
app.use('/api/posts', postsAPI)

// assets
app.use('/assets/', express.static(DIST_DIR + '/assets'))

// server side rendering
app.get('*', function(req, res) {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    let store = configureStore()
    let state = store.getState()

    const body = renderToString(
      <Provider store={store}>
        <RouterContext {...renderProps} />
      </Provider>
    )

    res.send(`
      <!DOCTYPE html>
          <html>
            <head>
              <link href="//cdn.muicss.com/mui-0.6.5/css/mui.min.css" rel="stylesheet" type="text/css" />
            </head>
            <body>
              <div id="root">${body}</div>
              <script>
                window.__REDUX_STATE__= ${JSON.stringify(state)}
              </script>
              <script src="/assets/app.js"></script>
            </body>
          </html>
          `)
  })
})

app.set('port', (process.env.PORT || 5000))
app.listen(app.get('port'), function() {
  console.log('Listening port ' + app.get('port'));
  console.log('You are in ' + process.env.NODE_ENV + ' environment');
});
