const express = require('express');
const todoController = require('../controllers/todoController')
const router = express.Router()

router.post('/create',todoController.createTodo)
router.get('/all',todoController.getAllTodos)
router.put('/update/:id',todoController.updateTodo)
router.delete('/delete/:id',todoController.deleteTodo)

module.exports=router