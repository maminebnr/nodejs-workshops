const express = require('express');
const category = require('./routes/category');
const app = express();

app.use('/category',category);
//http://localhost:9000/hola/?name=John&age=30
app.get('/hola',(req,res)=>{
    res.send(`hello i'm ${req.query.name} and i'm ${req.query.age} years old`)
   
})

//http://localhost:5000/test/john/30
app.get('/test/:name/:age',(req,res)=>{
    res.send(`hello i'm ${req.params.name} and i'm ${req.params.age} years old`)
   
})

app.get('/',(req,res)=>{
    res.send('Hello World')
    //res.json({message: 'Hello World'})
    //res.sendFile(__dirname+'/index.html')
    //res.redirect('https://www.google.com')
})

app.listen(5000,()=>{
    console.log('Server is running on port 5000...')
})