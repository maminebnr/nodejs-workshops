const Post = require('../models/post')


exports.createPost = async (req,res)=>{
    const {title,content}=req.body
    const post =  new Post({title,content,postedBy:req.user.userId})
    await post.save()
    res.status(201).send({message:"post created successfully",post})
}

exports.getAllPosts= async (req,res)=>{
    const posts = await Post.find().populate('postedBy','email').select("-password")
    res.send(posts)
}