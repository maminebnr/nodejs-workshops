const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:String,
    email:{required:true,unique:true,type:String},
    age:Number
})

module.exports = mongoose.model('User',userSchema)