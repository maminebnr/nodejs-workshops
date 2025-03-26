const User = require('../models/user')
const jwt = require('jsonwebtoken')
exports.register =async (req,res)=>{
    const{name,email,age,password}=req.body;
    const user = await User.findOne({email})
    if(user){
        return res.status(400).json({error:'email already exists'})
    }
    const newUser = new User({name,email,age,password})
    await newUser.save()
    res.status(201).json({message:'user created successfully'})
}
exports.login = async (req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        res.Status(404).json({message:"user not found"})
    }
    const isPassordMatch = await user.comparePassword(password)
    if(!isPassordMatch){
        return res.status(400).json({message:'invalid password'})
    }
    const token = jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:'1d'})
    res.send({message:'user logged in successfully',token})
}

exports.getAllUsers=async (req,res)=>{
    const users = await User.find()
    res.render('users',{users:users})
}

exports.me = async(req,res)=>{
   try {
      const user = await User.findById(req.user.userId).select('-password')
      if(!user){
        res.status(404).send({message:'User not found'})
      }
      res.send(user)
   } catch (error) {
    res.status(500).send({message:error.message})
   }
}