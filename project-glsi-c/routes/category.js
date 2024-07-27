const express = require('express');
const router = express.Router();


router.get('/:categoryId',(req,res)=>{
    res.send(`this is  a category id ${req.params.categoryId} `)
})

router.get('/all',(req,res)=>{
    res.send(`this is all categories`)
})
router.get('/',(req,res)=>{
    res.send('welcome to home category')
})

module.exports =router;