import express from 'express'
import path from 'path'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackDevConfigs from './webpack.dev'
import webpack from 'webpack'

const compiler = webpack(webpackDevConfigs)
const app = express()

const DIST_DIR = path.resolve(__dirname + '/../dist')
const SRC_DIR = path.resolve(__dirname + '/../src/')

/* Development */
/* It doesn't use the /dist folder's files, all the files sits in memory */
if(process.env.NODE_ENV === 'development'){
  app.use(webpackDevMiddleware(compiler,{
     stats: {colors: true},
     hot: true,
     historyApiFallback: true,
     publicPath: '/assets/'
  }))
  app.use(webpackHotMiddleware(compiler,{
    log: console.log,
    path: '/__webpack_hmr',
  }))
  app.get('*', function(req, res) {
    res.sendFile(SRC_DIR + '/index.html')
  })
}

/* Production */
if(process.env.NODE_ENV === 'production'){
  app.use('/assets/', express.static(DIST_DIR + '/assets'))
  app.get('*', function(req, res) {
    res.sendFile(DIST_DIR + '/index.html')
  })
}

/* Server */
app.listen(process.env.PORT || 3000, function() {
  console.log('Listening port ' + process.env.PORT || 3000)
  console.log('You are in ' + process.env.NODE_ENV + ' environment')
})
