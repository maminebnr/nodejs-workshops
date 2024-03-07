const express = require('express');
const authenticate = require('../middleware/authenticate')
const Post = require('../models/post')
const router = express.Router();

//create a new post 
router.post('/create',authenticate,async (req,res)=>{
    try {
        const {title,content}=req.body;
        const post = new Post({title,content,author:req.userId});
        await post.save();
        res.status(201).send('Post created successfully');
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.get('/',async (req,res)=>{
    try {
        const posts = await Post.find().populate('author','username')
        res.send(posts)
    } catch (error) {
        res.status(500).send('server error ')
    }
})

router.put('/:id',authenticate,async (req,res)=>{
    try {
       const {id} = req.params;
       const{title,content} = req.body;
       const updatedPost = await Post.findByIdAndUpdate(id,{title,content},{new:true})
       res.send(updatedPost)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.delete('/:id',authenticate,async (req,res)=>{
    try {
       const {id} = req.params;
       await Post.findByIdAndDelete(id)
       res.send('post deleted successfully')
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = router;