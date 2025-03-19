let todos = [{id:1,task:"complete hopework " ,done:false},
             {id:2,task:"gaming",done:false}]



//get all todos 
exports.getAllTodos =(req,res)=>{
    res.json(todos)
}

//create new todo 
exports.createTodo =(req,res)=>{
    const {task}=req.body;
    const newTodo = {id:todos.length + 1,task,done:false};
    todos.push(newTodo);
    res.status(201).json(todos)
}

//update todo 
exports.updateTodo =(req,res)=>{
   const {id}=req.params;
   const{task,done}=req.body;

   let todo = todos.find(t=> t.id === parseInt(id))
   if(!todo){
    res.status(404).json({message:"Todo not found"});
   }
   todo.task = task
   todo.done = done
   res.json(todo)
}

exports.getOneTodo =(req,res)=>{
    const {id}=req.params;
 
    let todo = todos.find(t=> t.id === parseInt(id))
    if(!todo){
     res.status(404).json({message:"Todo not found"});
    }
    res.json(todo)
 }
//delete todo
exports.deleteTodo =(req,res)=>{
    const {id}=req.params;
 
    let index = todos.findIndex(t=> t.id === parseInt(id))
    if(index === -1){
     res.status(404).json({message:"Todo not found"});
    }
    todos.splice(index,1)
    res.status.send(todos)
 }