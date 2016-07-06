var express = require('express');
var path = require('path');

var app = express();

var DIST_DIR = path.resolve(__dirname + '/../dist');


app.use('/assets/', express.static(DIST_DIR + '/assets'));
  app.get('*', function(req, res) {
    res.sendFile(DIST_DIR + '/index.html')
  });


app.listen(process.env.PORT, function() {
  console.log('Listening port ' + process.env.PORT)
  console.log('You are in ' + process.env.NODE_ENV + ' environment')
});
