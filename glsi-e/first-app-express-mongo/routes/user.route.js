const express = require('express')
const User = require('../models/user')
const router = express.Router()

router.post('/',async(req,res)=>{
    try {
        const user = new User(req.body)
        await user.save()
        res.status(201).send({message:"user saved successfully",user})
    } catch (error) {
        res.status(500).send({message:error})
    }

})
router.get('/all',async(req,res)=>{
   try {
    const users = await User.find()
    res.status(200).send(users);
   } catch (error) {
    throw new Error(error.message)
   }
})

router.put('/:email',async(req,res)=>{
    try {
        const user = await User.findOne({email:req.params.email});
        if(!user){
            res.status(404).send({message:"user not found"});
        }
        const newUser =await User.findOneAndUpdate(
            {email:req.params.email},
            {$set:{email:req?.body?.email ??"example@test.com"}},
            {new:true})
        res.send(newUser)
    } catch (error) {
    res.status(500).send({message:error});
    }
 })

 router.delete('/:email',async(req,res)=>{
    try {
        const user = await User.findOne({email:req.params.email});
        if(!user){
            res.status(404).send({message:"user not found"});
        }
        await User.deleteOne(
            {email:req.params.email})
            
        res.send({message:"User deleted successfully"})
    } catch (error) {
    res.status(500).send({message:error});
    }
 })

 router.get('/:name',async(req,res)=>{
    try {
        console.log(req.params.name)
        const user = await User.findOne({name:req.params.name});
        if(!user){
            res.status(404).send({message:"user not found"});
        }
        res.status(200).send(user)
    } catch (error) {
    res.status(500).send({message:error});
    }
 })

 

module.exports = router