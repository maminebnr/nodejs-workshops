const Post = require('../models/post')

exports.createPost = async (req,res)=>{
    const {title,body}= req.body;
    const post = new Post({title,body,postedBy:req.user.userId})
    await post.save()
    res.status(201).send({message:"post saved successfully",post})
}

exports.findAllPosts = async (req,res)=>{
    const posts = await Post.find().populate('postedBy','email')
    res.send(posts)
}