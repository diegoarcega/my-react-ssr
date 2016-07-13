import express from 'express'
import path from 'path'


const app = express()
const DIST_DIR = path.resolve(__dirname + '/../dist')

app.use('/assets/', express.static(DIST_DIR + '/assets'))


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/index.html'))
})

app.set('port', (process.env.PORT || 5000))

app.listen(app.get('port'), () => {
  console.log('Listening port ' + app.get('port'));
  console.log('You are in ' + process.env.NODE_ENV + ' environment');
});
