const express = require('express')
const app = express()
const databaseconnection = require('./config/database')
const mainRoute = require('./route/main')
var cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(mainRoute)


databaseconnection()

app.get('/', function (req, res) {
  res.send('Hello World')
})

let port = process.env.port || 5000;

app.listen(port,()=>{
    console.log("connected to port", port)
})