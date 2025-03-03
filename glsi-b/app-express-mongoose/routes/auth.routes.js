const express = require('express')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const authentication = require('../middlewares/authMiddleware')
const router =express.Router()

router.post('/register',async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        const user = new User({name,email,password})
        await user.save()
        res.status(201).send({message:"user saved successfully",user})
    } catch (error) {
        res.status(500).send({message:error.message})
    }
})

router.post('/login',async(req,res)=>{
   try {
      const {email,password}=req.body
      const user = await User.findOne({email})
      if(!user){
        res.status(404).send({message:'user not found'})
      }
    const isHavePassword = user.comparePassword(password)
    if(!isHavePassword){
        res.status(400).send({message:'invalid credentiels'})

    }
    const token = await jwt.sign({userId:user._id},process.env.SECRET_KEY)
    res.send({message:'user logged in successfully',token})
   } catch (error) {
    res.status(400).send({message:error.message})
   }
})

router.get('/me',authentication,async(req,res) => {
      try {
        console.log("running...")
        const user = await User.findById(req.user.userId).select('-password')
        if(!user){
            res.status(404).send({message: 'User not found'})
        }
        res.send(user)
      } catch (error) {
        res.status(500).send({message:error.message})
      }
})


module.exports = router