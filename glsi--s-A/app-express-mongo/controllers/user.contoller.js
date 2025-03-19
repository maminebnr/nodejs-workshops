const User = require('../models/user')
const jwt = require('jsonwebtoken')
exports.register =async (req,res)=>{
    const{name,email,age,password}=req.body;
    const user = User.findOne({email})
    if(user){
        return res.status(400).json({error:'email already exists'})
    }
    const newUser = new User({name,email,age,password})
    await newUser.save()
    res.status(201).json({message:'user created successfully'})
}
exports.login = async (req,res)=>{
    const {email,password} = req.body;
    const user = await newUser.findOne({email});
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