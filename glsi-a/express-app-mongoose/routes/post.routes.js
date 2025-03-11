const express = require('express');
const Post = require('../models/post')
const router = express.Router()
const authentication = require('../middlewares/authMiddleware')

router.post('/create',authentication,async(req,res)=>{
    try {
        const {title,content}=req.body;
        const post = new Post({title,content,userId:req.user.userId})
        await post.save()
        res.status(201).send({message:"post saved successfully",post})
    } catch (error) {
        res.status(500).send({message:error.message})
    }
})

router.get('/all',async (req,res)=>{
    const posts = await Post.find().populate('userId','email')
    res.send(posts)
})




module.exports = router