const express = require('express');
const router = express.Router()
const todoController = require('../controllers/todoController')

//get all routes
router.get('/all',todoController.getAllTodos)

//get all routes
router.get('/:id',todoController.getOneTodo)

//create a new todo
router.post('/create',todoController.createTodo)

//update todo
router.put('/:id',todoController.updateTodo)

//update todo
router.delete('/:id',todoController.deleteTodo)

module.exports = router