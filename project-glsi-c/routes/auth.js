const express = require('express')
const router = express.Router()

router.get('/register',(req,res)=>{
    res.send({message:'hello to register'})
})

router.get('/login',(req,res)=>{
    res.send({message:'hello to login'})
})

module.exports = router