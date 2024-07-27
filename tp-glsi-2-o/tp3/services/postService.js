const Post = require('../models/post')

const createPost =async (req)=>{
    try {
        const {title,content}=req.body;
        const post=new Post({title,content,author:req.userId})
        await post.save()
        return {message:"post saved successfully"}
    } catch (error) {
        return {message:error.message}

    }
}

const getAllPosts = async ()=>{
    const posts = await Post.find().populate('author','username')
    return posts
}

module.exports = {getAllPosts,createPost}