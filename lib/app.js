import express from 'express'
const index = require('../routes');

const app = express()

app.get('/', function (req, res) {
    res.send('StylityApp API server ready')
})

app.use('/users', index);

const port = process.env.PORT || 3000
app.listen(port, function () {
    console.log('Server listening on port ' + port)
})
