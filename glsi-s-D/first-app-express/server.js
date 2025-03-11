const express = require('express');
const app = express();
const users = [{id:1,title:"harry poter"},{id:2,title:"azerty"}]

//middelware body parser
app.use(express.json())
app.post('/create',(req,res)=>{
    const data = users.push(req.body)
    res.send(users)//accept all types of response
})
app.get('/',(req,res)=>{
    res.send('hello from my server express !!')//accept all types of response
    res.json({success:"server running"})
    res.end('hello')
})

app.get('/file',(req,res)=>{
    res.status(200).sendFile(__dirname+'/public/index.html')
})

app.get('/link',(req,res)=>{
    res.status(200).redirect('https://google.com')
})

app.get('/all',(req,res)=>{
    res.status(200).send(users)
})
app.get('/one',(req,res)=>{
    res.status(200).json(users[0])
})
app.get('/somme/:x/:y',(req,res)=>{
    const x = Number(req.params.x)
    const y = Number(req.params.y)
    res.status(200).send(`la somme de ${x} + ${y} = ${x+y}`)
})

app.get('/test',(req,res)=>{
    const age = req.query.age
    const name = req.query.name
    res.status(200).send(`${name} ${age}`)
})
app.listen(9000,()=>{
    console.log("server listening on port 9000");
})