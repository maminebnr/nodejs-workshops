const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const register = async(username,password)=>{

        const checkUser = await User.findOne({username: username})
        if(checkUser){
            throw new Error('User already registered')
        }
        const user = new User({username,password})
        await user.save()
        return {message:'User registration successful'}

}

const login = async (username,password)=>{
    const user = await User.findOne({username: username})
    if(!user || ! bcrypt.compareSync(password,user.password) ){
        throw new Error('invalid credentiels')

    }
    return generateToken(user._id)
}

const generateToken = (userId)=>{
    return jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:'1h'})
}

module.exports ={register,login}