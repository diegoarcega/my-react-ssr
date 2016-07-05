const express = require('express')
const path = require('path')
const app = express()

const DIST_DIR = path.resolve(__dirname + '/../dist')

app.use(express.static(DIST_DIR))
app.use('/assets/', express.static(__dirname + 'dist/assets'))

app.get('/', function(req, res) {
  res.sendFile('index.html')
})


app.listen(3000, function() {
  console.log('listening to port 3000')
})
