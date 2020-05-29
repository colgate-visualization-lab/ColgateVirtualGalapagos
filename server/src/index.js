const express = require('express')
const cors = require('cors')
require('./db/mongoose')
const userRouter = require('./routers/user')

const app = express()
const port = process.env.PORT || 3000

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.use(express.json())
app.use(cors())
app.use(userRouter)

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})