const express = require('express')
const userController=require('../controllers/userController')
const authentication = require('../middelwares/authMiddelware')
const router = express.Router();

router.post('/register',userController.register)
router.post('/login',userController.login)
router.get('/me',authentication,userController.me)
router.get('/all',userController.getAllUsers)




module.exports=router;

