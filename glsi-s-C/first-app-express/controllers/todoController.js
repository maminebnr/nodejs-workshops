const todos = [
    {id:1,task:"homwork",done:false},
    {id:2,task:"watching movie",done:false},
]

exports.createTodo=(req,res)=>{
    const {task}=req.body
    const newTodo = {id:todos.length + 1,task,done:false}
    todos.push(newTodo)
    res.send(todos)

}

exports.getAllTodos =(req,res)=>{
    res.send(todos)
}

exports.updateTodo =(req,res)=>{
    const id = Number(req.params.id)
    const checkTodo = todos.find(t =>t.id === id)
    if(!checkTodo){
        res.status(404).send({message:"todo not found "})
    }
    checkTodo.task = req.body.task
    checkTodo.done = req.body.done
    res.send(checkTodo)
}

exports.deleteTodo = (req,res)=>{
     const index = todos.findIndex(t=>t.id===Number(req.params.id))
     if(index === -1){
        res.send(404).send('todo not found')
     }
     todos.splice(index,1)
     res.send(todos)
}

