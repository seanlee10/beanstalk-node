const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', function (req, res) {
  res.send('Hello World :)')
})
 
app.listen(port)

console.log('Server running at http://127.0.0.1:' + port + '/');
