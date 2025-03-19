const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todoController')

router.get('/all',todoController.getAllTodos)

router.post('/create',todoController.createTodo)

router.put('/update/:id',todoController.updateTodo)

router.delete('/delete/:id',todoController.deleteTodo)

module.exports = router
