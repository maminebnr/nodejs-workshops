const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
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
mongoose.connect('mongodb+srv://medaminebnr:azertyuiop@cluster0.he3afya.mongodb.net/?retryWrites=true&w=majority').then(()=>{
console.log('connected to the database')    
app.listen(9000,()=>{
        console.log('server is running on port 9000')
    })
}).catch(err=>{
    console.log(err)
})