const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("<h1>Hello Category</h1>")
})

router.get('/all',(req,res)=>{
    res.send([{id:1,name:"sachin"},{id:2,name:"saurav"}])
})


router.get('/one',(req,res)=>{
    res.send({id:1,name:"sachin"})
})

module.exports = router;