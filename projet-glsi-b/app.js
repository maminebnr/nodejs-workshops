const express = require('express');
const user = require('./routes/user')
//create instance of express
const app = express();

//create a middleware for parsing the content of body 
app.use(express.json())

app.use('/user',user)

//http://localhost:9000/node/?name=glsi?firstname=node
//pass paramas with query parameters to express server
app.get('/node',(req,res)=>{
    console.log("test1",req.query.name)
    console.log("test2",req.query.firstname)
})

//http://localhost:9000/tic/glsi/node
//pass paramas with params  to express server
app.get('/tic/:name/:firstname',(req,res)=>{
    console.log("test1",req.params.name)
    console.log("test2",req.params.firstname)
})
app.get('/',(req,res)=>{
    console.log(req.headers)
    res.send('Welcome Back ')
})
app.get('/template',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.get('/middle',(req,res,next)=>{
    //res.send('request number 1 ')
    console.log('request number 1')
    next()
},(req,res,next)=>{
    res.send('request number 2 ')
})
//https://github.com/maminebnr
//mohamedamine.benrhouma@tek-up.de

app.get('/exmpl1',(req,res)=>{
    //res.redirect('https://www.google.com')
    //res.end('hello and goodbye ')
    //res.status(200).send('everything is good')
    //res.render('index')
})

app.listen(9000,()=>{
    console.log('listening       on port 9000');
})