  require("babel-core").transform("code", {
  plugins: [
    "transform-react-jsx",
    "transform-es2015-literals",
    "transform-es2015-function-name",
    "transform-runtime"
  ],
  presets: ["es2015", "react"]
});

import express from 'express'
import path from 'path'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { Router, Route, match, RouterContext } from 'react-router'
import routes from '../src/server/routes'

const app = express()

const DIST_DIR = path.resolve(__dirname + '/../dist')

app.use('/assets/', express.static(DIST_DIR + '/assets'))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
  // match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
  //   res.status(200).send(
  //   '<link href="//cdn.muicss.com/mui-0.6.5/css/mui.min.css" rel="stylesheet" type="text/css" />' +
  //     renderToStaticMarkup(<RouterContext {...renderProps}/>)
  //     + '<script async src="assets/app.js"></script>'
  //   )
  // })
})

app.set('port', (process.env.PORT || 5000))

app.listen(app.get('port'), function() {
  console.log('Listening port ' + app.get('port'));
  console.log('You are in ' + process.env.NODE_ENV + ' environment');
});
