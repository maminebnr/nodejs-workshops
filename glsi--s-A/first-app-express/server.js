const express = require('express');
const app = express();
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todoRoutes')
const users = [{id:1,name:'ali'},{id:2,name:'alex'}]

app.use(express.json()) // middelware for parsing the body of request

app.use('/todos',todoRoutes)

app.post('/create',(req,res)=>{
    const data = req.body;
    users.push(data)
    res.status(201).send(users)
})
app.get('/',(req,res)=>{
    res.send('hello from my server express')
})

app.get('/users',(req,res)=>{
     res.send(users) //return all type in rsponse
     res.json({message:'user registred successfully'})//return just json format
})

app.get('/file',(req,res)=>{
    res.status(200).sendFile(__dirname+'/public/index.html')
})

app.get('/redirection',(req,res)=>{
    res.redirect('https://google.com')
})

app.get('/product',(req,res)=>{
    res.status(404).send('Product not found')
})

app.get('/:x/:y',(req,res)=>{
    const x = Number(req.params.x)
    const y = Number(req.params.y)
    res.status(200).send(`la somme de ${x} + ${y} = ${x+y}`)
})

app.listen(7000,()=>{
    console.log('server listening on port 7000 ')
})