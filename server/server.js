require("babel-core").transform("code", {
  plugins: [
    "transform-react-jsx",
    "transform-es2015-literals",
    "transform-es2015-function-name",
    "transform-runtime"
  ],
  presets: ["es2015", "react"]
});


var express = require('express');
var path = require('path');
var app = express();
var React = require('react');
var ReactServer = require('react-dom/server');
import { Router, Route, hashHistory, match, RouterContext } from 'react-router'


var htmlMarkup = '<!DOCTYPE html>' +
'<html>' +
  '<meta charset="UTF-8"/>' +
  '<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">' +
  '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>' +

  '<head>' +
    '<title>Learning React</title>' +
  '</head>' +

  '<body style="background: #F5F8FA">' +
    '<p>I am coming from the server side</p>' +
    '<div id="myApp"></div>' +
  '</body>' +


'</html>';


// var indexReactElement = React.createElement("div", null, "Hello");
var indexReactElement = React.createElement(require('../src/shellRoutes.js'));

var resu = ReactServer.renderToString(indexReactElement);

var DIST_DIR = path.resolve(__dirname + '/../dist');
app.set('port', (process.env.PORT || 5000));

/*
************************************************************************
* Development
* It doesn't use the /dist folder's files, all the files sits in memory
************************************************************************
*/
if(process.env.NODE_ENV === 'development'){
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var webpackDevConfigs = require('./webpack.dev');
  var webpack = require('webpack');

  var compiler = webpack(webpackDevConfigs);
  var SRC_DIR = path.resolve(__dirname + '/../src/');

  app.use(webpackDevMiddleware(compiler,{
     stats: {colors: true},
     hot: true,
     historyApiFallback: true,
     publicPath: '/assets/'
  }));

  app.use(webpackHotMiddleware(compiler,{
    log: console.log,
    path: '/__webpack_hmr',
  }));


  const routes = (
    <Router history={hashHistory}>
      <Route path="/" component={require('../src/shellRoutes.js')}></Route>
    </Router>
  )
  app.get('*', function(req, res) {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
      res.status(200).send(ReactServer.renderToString(<Router {...renderProps}/>));
    });
    // res.setHeader('Content-Type', 'text/html');
    //   res.send('<!DOCTYPE html>' +
    //   '<html>' +
    //     '<meta charset="UTF-8"/>' +
    //     '<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">' +
    //     '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>' +
    //     '<link href="//cdn.muicss.com/mui-0.6.5/css/mui.min.css" rel="stylesheet" type="text/css" />' +
    //     '<head>' +
    //       '<title>Learning React</title>' +
    //     '</head>' +
    //     '<body style="background: #F5F8FA">' +
    //     resu +
    //   '</body>' +
    // '</html>'
    //   );

  });
}

/* <script>`+ require('../dist/assets/shell.js') + `</script>
************************************************************************
* Production
************************************************************************
*/
if(process.env.NODE_ENV === 'production'){
  app.use('/assets/', express.static(DIST_DIR + '/assets'));

  app.get('*', function(req, res) {
    res.sendFile(DIST_DIR + '/index.html');
  });
}

/*
************************************************************************
* Server listens
************************************************************************
*/
app.listen(app.get('port'), function() {
  console.log('Listening port ' + app.get('port'));
  console.log('You are in ' + process.env.NODE_ENV + ' environment');
});
