const express = require('express');
const postController = require('../controllers/postController')
const authentication = require('../middelwares/authMiddleware')
const router = express.Router()

router.post('/create',authentication,postController.createPost)
router.get('/all',postController.getAllPosts)





module.exports = router