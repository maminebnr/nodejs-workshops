const todos = [{id:1,task:"football",done:false},{id:2,task:"homework",done:false}]

//get all todos
exports.getAllTodos = (req,res)=>{
    res.send(todos)
}

//create new todo
exports.createTodo = (req,res)=>{
    const {task}=req.body
    const newTodo = {id:todos.length + 1,task,done:false}
    todos.push(newTodo)
    res.send(todos)
}

exports.updateTodo = (req,res)=>{
    const id = Number(req.params.id)
    const todo = todos.find(t => t.id === id)
    if(!todo){
        res.status(404).send('todo not found ')
    }
    todo.task = req.body.task
    todo.done = req.body.done
    res.send(todo)
}

exports.deleteTodo = (req,res)=>{
    const id = Number(req.params.id)
    const index = todos.findIndex(t => t.id === id)
    if(index === -1){
        res.status(404).send('todo not found ')
    }
    todos.splice(index,1)
    res.send(todos)
}