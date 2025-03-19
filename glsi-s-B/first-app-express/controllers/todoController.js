const todos = [
    {id:1,task:"homework",done:false},
    {id:2,task:'play Football',done:false}
]

exports.createTodo = (req,res)=>{
    const{task}=req.body;
    const newTask = {id:todos.length+1,task,done:false}
    todos.push(newTask)
    res.send(todos)
}
exports.getAllTodos=(req,res)=>{
    res.send(todos)
}

exports.updateTodo=(req,res)=>{
    const id = Number(req.params.id)
    const{task,done}=req.body
    const checkTodo = todos.find(t =>t.id === id)
    if(!checkTodo){
        res.status(404).send('Todo not found')
    }
    checkTodo.task = task
    checkTodo.done = done

    res.send(checkTodo)
}

exports.deleteTodo=(req,res)=>{
    const id = Number(req.params.id)
    const index = todos.findIndex(t =>t.id === id)
    if(index === -1){
        res.status(404).send('Todo not found')
    }
    todos.splice(index,1)

    res.send(todos)
}