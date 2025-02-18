const express = require('express');
const app = express();

app.use(express.json());

let todos = [{id:Date.now().toString()+"1",title:"my first todo"},{id:Date.now().toString()+"2",title:"my second todo "}]

app.post('/api/todos/create',(req,res)=>{
    todos.push({id:Date.now().toString()+"3",title:req.body.title})
    res.status(201).send(todos)
})

app.put('/api/todos/update/:id',(req,res)=>{
    //const id = Number(req.params.id)
    todos =todos.map((todo)=>{
         return todo.id === id ?{...todo,title:req.body.title}:todo
    })
    res.status(201).send(todos)
})

app.delete('/api/todos/:id',(req,res)=>{
    todos = todos.filter(todo =>{
        return todo.id !== req.params.id
    } )
    res.status(201).send(todos)

})


app.get('/api/todos/all',(req,res)=>{
    res.send(todos)
})
app.get('/',(req,res)=>{
    res.send('hello from server') //accept all type of responses 
    res.json({success:"hello from server"})//accept only json response
    res.end('hello world ') // return this result and skipp the other ones
    res.status(404).send('product not found ')
})

app.get('/file',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
})


app.listen(9000,()=>{
    console.log('server running ...');
})