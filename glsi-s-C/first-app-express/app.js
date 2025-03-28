const express = require('express');
const todoRoutes = require('./router/todo')
const app = express();

app.use(express.json())

app.use('/todo',todoRoutes);

app.get('/file',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
})

app.get('/:x/:y',(req,res)=>{
    const x = Number(req.params.x)
    const y = Number(req.params.y)
    return x + y ;

})
app.get('/',(req,res)=>{
    res.send('welcome to my server expres')//accept all types of response
    res.json({message:"Welcome to my server"})//accept just json response
    res.end({message:"skip the other one "})//running me and skip the other one
})


app.listen(9001,()=>{
    console.log("server listening on port 9001")
})