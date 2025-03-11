const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title:String,
    content:String,
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
}) 

module.exports = mongoose.model('Post',postSchema)