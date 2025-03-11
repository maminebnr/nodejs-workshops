const express = require('express');
const app = express();

//parsing the body of the request in format json 
app.use(express.json())
app.get('/',(req,res)=>{
    res.send({message:'hello from my server !'})
    /* res.json({message:'hello from my server'})
    res.end() */
})

app.post('/api/todos/create',(req,res)=>{
    const todos = []
    const newTodo = {id:Date.now(),title:req.body.title}
    todos.push(newTodo)
    res.send(todos)
})

app.put('/api/todos/update/:todoId',(req,res)=>{
    const todos = [{id:1,title:'hello',id:2,title:"developer"}]
    const id =req.params.todoId
    todos.map(todo=>{
        todo.id=Number(id)?{...todo,...req.body}:todo
    })
    res.send(todos)

})
app.delete('/api/todos/delete/:todoId',(req,res)=>{
    const todos = [{id:1,title:'hello'},{id:2,title:"developer"}]
    const id =req.params.todoId
    const newArr = todos.filter((todo) => {  
        return todo.id !== Number(id);  
    });  
    res.send(newArr)

})

const PORT = 7000
app.listen(PORT,()=>{
    console.log('listening on port' + PORT);
});