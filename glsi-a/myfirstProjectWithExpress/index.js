const express = require('express')
const app = express()

app.use(express.json());

let todos = [{id:1,title:"hello"},{id:2,title:"test app"}];
app.post('/api/todos/create',(req,res)=>{
    todos.push(req.body)
    res.send(todos)
})

app.put('/api/todos/update/:id',(req,res)=>{
    const id = req.params.id;
    if(todos.length === 0){
        res.send('the array is empty');
    }else{
        todos =todos.map((todo)=>
             todo.id === Number(id) ? {...todo,...req.body}:todo
        )
        res.send(todos)
    }
})
app.delete('/api/todos/delete/:id',(req,res)=>{
    const id = Number(req.params.id)
    todos = todos.filter(todo =>todo.id !== id)
    res.send(todos)
})

app.get('/',(req,res)=>{
    res.send({message:"hello to my website "}) //accept all types in reponse 
    res.json({message:"hello to my website"}) //accept just json format
    res.end() // do that and skip other requests
})

app.get('/file',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})

app.listen(5000,()=>{
    console.log('server listening on port 5000')
})