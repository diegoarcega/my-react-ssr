var express = require('express');
var path = require('path');

var app = express();

var DIST_DIR = path.resolve(__dirname + '/../dist');

app.set('port', (process.env.PORT || 5000));

app.use('/assets/', express.static(DIST_DIR + '/assets'));

app.get('/', function(req, res) {
  // res.sendFile(DIST_DIR + '/index.html')
  res.send('hello');
});


app.listen(app.get('port'), function() {
  console.log('Listening port ' + app.get('port'))
});
