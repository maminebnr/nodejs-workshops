const express = require('express')
const auth = require('./routes/auth')
const post = require('./routes/post')
const app = express()
//middleware body parser (display content of body )
app.use(express.json())

app.use('/auth',auth)
app.use('/post',post)

app.listen(5000,()=>{
    console.log('listening on port  5000');
})