const express = require('express')
const router = express.Router()
const authService = require('../services/authService')


router.post('/register',async (req,res)=>{
    try {
    const {username,password}=req.body
    const data = await authService.register(username,password)
    res.send(data)
    } catch (error) {
        res.status(409).send({message:error.message})
    }
})


module.exports = router