const express = require('express')
const bodyParser = require('body-parser')
const auth = require('./routes/auth')
const product = require('./routes/product')
// instance from express 
const app = express()

app.use(bodyParser.json())

app.use('/auth',auth)
app.use('/product',product)
/* app.get('/products',(req,res)=>{
    res.send({name:'product 1',price:100})
}) */

app.get('/template',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

//http://localhost:9000/user/?name=john&password=azerty
app.get('/user',(req,res)=>{
    res.send({name:req.query.name,password:req.query.password})
})

//http://localhost:9000/post/john/azerty
app.get('/post/:name/:password',(req,res)=>{
    res.send({name:req.params.name,password:req.params.password})
})

app.get('/redirect',(req,res)=>{
    res.redirect('/products')
})

app.get('/',(req,res)=>{
    res.send('Hello World')
})



//creation of the server instance 
app.listen(9000,()=>{
    console.log('Server is running on port 9000')
})