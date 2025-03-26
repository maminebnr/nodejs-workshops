const express = require('express');
const userController = require('../controllers/user.contoller')
const authentication = require('../middelwares/authMiddleware')
const router = express.Router();

router.post('/login',userController.login)
router.post('/register',userController.register)
router.get('/me',authentication,userController.me)
router.get('/all',userController.getAllUsers)








module.exports = router