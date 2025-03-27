const User = require('../models/user')
const jwt = require('jsonwebtoken')

exports.register = async (req,res)=>{
    const {name,email,age,password}=req.body
    const user = await User.findOne({email})
    console.log(user)
    if(user){
        return res.status(400).json('email already exist ')
    }
    const newUser = new User({name,email,age,password})
    await newUser.save()
    res.status(201).json({message:'user created successfully'})
}

exports.login = async (req,res)=>{
    const {email,password}= req.body
    const user = await User.findOne({email})
    if(!user){
        return res.status(400).json('email not exist ')
    }

    const isMatch = await user.comparePassword(password)
    console.log(isMatch,user.password)
    if(!isMatch){
        return res.status(400).json({message:'invalid password'})
    }
    const token = jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:'1d'})
     res.send({message:'user logedIn successful',token})
} 
exports.me =async (req,res)=>{
    const user = await User.findById(req.user.userId).select('-password')
    if(!user){
        res.status(404).send({message:"user not found"})
    }
    res.status(200).send(user)
}
exports.getAllusers = async (req,res)=>{
    const users = await User.find().select('-password')
    res.render('users',{users:users})
}