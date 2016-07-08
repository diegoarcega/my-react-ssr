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
import { renderToString } from 'react-dom/server'
import { Router, Route, match, RouterContext } from 'react-router'
import routes from '../src/shared/routes'


const app = express()

const DIST_DIR = path.resolve(__dirname + '/../dist')
const SRC_DIR = path.resolve(__dirname + '/../src/')

app.use('/assets/', express.static(DIST_DIR + '/assets'))

app.get('*', function(req, res) {
  // res.setHeader('Content-Type', 'text/html')
  // res.send('<!DOCTYPE html>' +
  //   '<html>' +
  //     '<meta charset="UTF-8"/>' +
  //     '<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">' +
  //     '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>' +
  //     '<link href="//cdn.muicss.com/mui-0.6.5/css/mui.min.css" rel="stylesheet" type="text/css" />' +
  //     '<head>' +
  //       '<title>Learning React</title>' +
  //     '</head>' +
  //     '<body style="background: #F5F8FA">' +
  //     '<p>aaa</p>' +
  //     '<script src="assets/shell.js"></script>' +
  //   '</body>' +
  // '</html>'
  //   )

  // res.send('<div id="myApp"></div><script async src="assets/app.js"></script>')

  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    res.status(200).send(
    '<link href="//cdn.muicss.com/mui-0.6.5/css/mui.min.css" rel="stylesheet" type="text/css" />' +
      renderToString(<RouterContext {...renderProps}/>)
      + '<script async src="assets/app.js"></script>'
    )
  })
})




app.set('port', (process.env.PORT || 5000))
app.listen(app.get('port'), function() {
  console.log('Listening port ' + app.get('port'));
  console.log('You are in ' + process.env.NODE_ENV + ' environment');
});

app.get('*', function(req, res) {
  res.sendFile(DIST_DIR + '/index.html');
});
