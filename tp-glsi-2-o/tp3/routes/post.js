const express = require('express')
const router = express.Router()
const postService = require('../services/postService')
const authenticate = require('../middleware/authenticate')

//create post when user is logged in
router.post('/create',authenticate,async (req,res)=>{
   const post = await postService.createPost(req)
   res.send(post)
})

//get all posts 
router.get('/all',async (req,res)=>{
   try {
    const posts = await postService.getAllPosts()
    res.send(posts)
   } catch (error) {
    res.status(409).send({message:error.message})
   }
})

router.delete("/:postId", async (req, res) => {
   try {
    const msg = await postService.deletePost(req)
    res.status(200).send(msg)
   } catch (error) {
    res.status(409).send({message:error.message})
   }
})

router.patch("/:postId", async (req, res) => {
   try {
    const msg = await postService.updatePost(req)
    res.status(msg.status).send
    (msg)
   } catch (error) {
    res.status(409).send({message:error.message})
   }
})

router.get("/myposts", authenticate, async (req, res) => {
   try {
      const posts = await postService.getMyPosts(req)
      res.send(posts)
     } catch (error) {
      res.status(409).send({message:error.message})
     }
})






module.exports = router