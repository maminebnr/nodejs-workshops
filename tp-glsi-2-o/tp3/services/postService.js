const Post = require('../models/post')

const createPost = async (req) => {
    try {
        const { title, content } = req.body;
        const post = new Post({ title, content, author: req.userId })
        await post.save()
        return { message: "post saved successfully" }
    } catch (error) {
        return { message: error.message }

    }
}

const getAllPosts = async () => {
    const posts = await Post.find().populate('author', 'username')
    return posts
}

const deletePost = async (req) => {
    try {
        const { postId } = req.params
        const post = await Post.findByIdAndDelete(postId)
        return { message: "deleted successfully" }
    } catch (error) {
        return { message: error.message }
    }
}

const updatePost = async (req) => {
    try {
        const { postId } = req.params
        const { title, content } = req.body;
        
        const post = await Post.findByIdAndUpdate(postId, { title, content },{
             new: true,
             runValidators: true
        })
        if (!post) return {"message": "post not found", "status": 404}
        return { "status": 200, message: "updated successfully", post }
    } catch (error) {
        return { message: error.message }
    }
}

const getMyPosts = async (req) => {
    const posts = Post.find({author: req.userId})
    return posts
}

module.exports = { getAllPosts, createPost, deletePost, updatePost, getMyPosts }