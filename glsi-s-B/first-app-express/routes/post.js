const express = require('express')
const postController=require('../controllers/postController')
const authentication = require('../middelwares/authMiddelware')
const router = express.Router();

router.post('/create',authentication,postController.createPost)
router.get('/all',postController.findAllPosts)

module.exports=router;