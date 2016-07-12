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


const app = express()
const DIST_DIR = path.resolve(__dirname + '/../dist')

app.use('/assets/', express.static(DIST_DIR + '/assets'))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.set('port', (process.env.PORT || 5000))

app.listen(app.get('port'), function() {
  console.log('Listening port ' + app.get('port'));
  console.log('You are in ' + process.env.NODE_ENV + ' environment');
});
