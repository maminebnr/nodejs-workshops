const express = require('express');
const todoRouter=require('./routes/todo')
const app = express()

const users = [{id:1,name:"ali"},{id:2,name:"fethi"}]
app.use(express.json())
app.use('/todo',todoRouter)


app.get('/all',(req,res)=>{
    res.send(users)
})

app.get('/one',(req,res)=>{
    res.send(users[0])
})

app.get('/file',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})

app.get('/redirection',(req,res)=>{
    res.redirect('https://google.com') 
})

app.get('/sum/:x/:y',(req,res)=>{
    const x = Number(req.params.x)
    const y = Number(req.params.y)
    res.status(200).send(`la somme de ${x} +  ${y} =  ${x+y}`)
})



app.get('/',(req,res)=>{
    res.send('Hello from my server express') //accept all type of responses
    res.json({succes:"its okay "})//accept just json type 
    res.end('hello ') // return this result and skip the other one 
})

app.listen(9002,()=>{
    console.log('listening on http://localhost:9002');
})