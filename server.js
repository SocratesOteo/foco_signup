
const express = require('express')
const path = require('path')
const cors = require('cors')
const port = process.env.PORT || process.env.SERVER_PORT

const app = express()
app.use (express.json)
app.use(cors())

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, "/home.html"))
})


const server = app.listen(port, ()=>{
    console.log('finally!!!!!!!!')
})

server.keepAliveTimeout = 61 * 1000
server.headersTimeout = 65 * 1000