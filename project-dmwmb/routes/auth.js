const express = require('express');
const router = express.Router();

router.post('/login',(req,res)=>{
    console.log(req.body)
    res.send(req.body);
})

router.get('/register',(req,res)=>{
    res.send('<h1>Welcome to register !</h1>');
})

module.exports = router