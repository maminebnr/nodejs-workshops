const express = require('express');
const app = express();

app.use(express.json()); //middleware for parsing body of request to json 
let todos = [{id:1,title:"film 1"},{id:2,title:"film2"}]

app.post('/api/todos/create',(req,res)=>{
    todos.push(req.body)
    res.send(todos)
})

app.get('/api/todos/all',(req,res)=>{
    res.send(todos)
})

app.put('/api/todos/update/:id',(req,res)=>{
    const id = Number(req.params.id)
    todos = todos.map(todo=>{
        return todo.id === id ?{...todo,...req.body}:todo
    })
    res.send(todos)
})

app.delete('/api/todos/delete/:id',(req,res)=>{
    const id = Number(req.params.id)
    todos = todos.filter(todo => todo.id !== id )
    res.send(todos)
})

app.get('/api/todos/:id',(req,res)=>{
    const id = Number(req.params.id)
    let checkTodos = todos.find(todo => todo.id === id )
    if(!checkTodos){
        res.status(404).send('todo not found ')
    }
    res.send(checkTodos)
})





app.get('/file', (req, res) => {
    res.sendFile(__dirname+'/public/index.html');
})

app.get('/user/:id',(req,res)=>{
    const id = req.params.id;
    res.send(id)
})
app.get('/',(req,res)=>{
    res.send('welcome to my server ')//accept all types of responses 
    res.json({success:"hello to my server"})//accept just json in response
    res.end('welcome to my server')//execute the request and skipp the other ones 
})
app.listen(5000,()=>{
    console.log('listening on port',5000)
})