const User = require('../models/user')
const jwt = require('jsonwebtoken')
exports.register=async (req,res)=>{
    const {name,email,age,password} = req.body;
    const user = await User.findOne({email})
    if(user){
        return res.status(400).send({message:'email already registered'})
    }
    const newUser = new User({name,email,password,age})
    await newUser.save()
    res.status(201).send({message:'user successfully registered'})
}

exports.login = async (req,res)=>{ 
    const {email,password}= req.body;
    const user = await User.findOne({email})
    if(!user){
        res.status(404).send({message:'user not found '})
    }
    const isMatch = await user.comparePassword(password)
    if(!isMatch){
        res.status(400).send({message:'password invalid'})
    }
    const token = jwt.sign({userId:user._id},process.env.SECRET_KEY,{expiresIn:'1d'})
    res.status(200).send({message:'user logged in successfully',token})

}