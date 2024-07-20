//create model of user Document object 
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    username:{type:String,unique:true,required:true,immutable:true},
    password:{type:String,required:true,}
})

userSchema.pre('save',async function(next){
    const user = this;
    if(user.isModified('password')){
        user.password =await bcrypt.hash(user.password,10)
    }
    next()
})


const User = mongoose.model('User',userSchema);

module.exports = User;