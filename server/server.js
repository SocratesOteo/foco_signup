
const express = require('express')
const path = require('path')
const cors = require('cors')
const port = process.env.PORT || 3000

const app = express()
app.use (express.json)
app.use(cors())

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, "../home.html"))
})


app.listen(port, ()=>{
    console.log('finally!!!!!!!!')
})

