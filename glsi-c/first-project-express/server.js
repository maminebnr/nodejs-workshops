const express = require('express');
const app = express();

app.use(express.json()) //middleware parsing body to json object
let todos =[{id:1,name:"ali"},{id:2,name:"rami"}]

app.post('/api/todos/create',(req,res)=>{
    todos.push(req.body)
    res.send(todos)
})

app.put('/api/todos/update/:id',(req,res)=>{
    const id =Number(req.params.id)
    todos = todos.map((todo)=>{
        return  todo.id === id ?{...todo,...req.body}:todo
    })
    res.send(todos)
})

app.delete('/api/todos/delete/:id',(req,res)=>{
    const id =Number(req.params.id)
    todos = todos.filter((todo)=>{
        return  todo.id !== id 
    })
    res.send(todos)
})
 
app.get('/',(req,res)=>{
    res.send("hello from my server") //can return all types of data in respnse
    res.json({message :"hello"})//accept response only json 
    res.end({message:"do this and skip others requests "}) 
    res.statusCode(404).send({message:"product not found "})
})

app.get('/file',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(4000,()=>{
    console.log('listening on port '+4000);
})