const express = require('express');
const User = require('../models/user')
const router = express.Router();

router.post('/',async (req,res)=>{
    try {
        const user = new User(req.body)
        await user.save()
        res.status(201).send({message:"user saved successfully",user})
    } catch (error) {
        console.log(error)
    }
})
router.get('/one/:email',async(req,res)=>{
    try {
        console.log(req.params.email)
        const user = await User.findOne({email:req.params.email})
        if(!user){
            res.status(404).send({message:"user not found"})
        }
        res.send(user)
    } catch (error) {
        res.send({error:error})
    }
})
router.get('/all',async(req,res)=>{
    try {
        const users = await User.find()
        res.send(users)
    } catch (error) {
        res.send({error:error})
    }
})
router.put('/update/:id',async(req,res)=>{
    try {
        await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).send({message:"user updated successfully"})
    } catch (error) {
        res.status(400).send({message:error})
    }
})

router.delete('/delete/:id',async(req,res)=>{
    try {
        await User.deleteOne(req.params.id)
        res.status(200).send({message:"user deleted successfully"})
    } catch (error) {
        res.status(400).send({message:error})
    }
})



module.exports = router