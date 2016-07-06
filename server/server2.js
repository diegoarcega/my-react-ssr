var express = require('express');
var path = require('path');

var app = express();

var DIST_DIR = path.resolve(__dirname + '/../dist');
var SRC_DIR = path.resolve(__dirname + '/../src/');


app.use('/assets/', express.static(DIST_DIR + '/assets'));
  app.get('*', function(req, res) {
    res.sendFile(DIST_DIR + '/index.html')
  });


app.listen(process.env.PORT || 3000, function() {
  console.log('Listening port ' + process.env.PORT || 3000)
  console.log('You are in ' + process.env.NODE_ENV + ' environment')
});
