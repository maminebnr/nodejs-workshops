const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const category = require('./routes/category')
dotenv.config()
const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT
//create instance of express server
const app = express()

//use the middleware body parser in express 
app.use(express.json())

app.use('/category',category)
app.post('/create',(req,res)=>{
    console.log(req.body)
})
app.get('/products',(req,res)=>{
   res.send([{id:1,name:"sachin"},{id:2,name:"saurav"}])
})

app.get('/template',(req,res)=>{
     res.redirect('/products')
     })
//first route with get method and send response to the client
app.get('/',(req,res)=>{
    //res.send("<h1>Hello World</h1>")
    //res.send({id:1,name:"sachin"})
    //res.json({id:1,name:"sachin"})
    res.sendFile(__dirname+'/index.html')
})

//connect to the database
mongoose.connect(MONGODB_URI).then(()=>{
    console.log('Connected to the database')
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
    })
}).catch(err=>{
    console.log('Error connecting to database:',err.message)
})