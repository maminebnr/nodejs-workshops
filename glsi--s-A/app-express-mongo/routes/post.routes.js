const express = require('express');
const postController = require('../controllers/post.controller')
const authentication = require('../middelwares/authMiddleware')
const router = express.Router()


router.post('/create',authentication,postController.createNewPost)
router.get('/all',postController.getAllPosts)





module.exports = router