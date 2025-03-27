const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const authentication = require('../middelwares/authMiddleware')
router.post('/login', userController.login)
router.post('/register', userController.register)
router.get('/me',authentication, userController.me)
router.get('/all', userController.getAllusers)





module.exports =router
