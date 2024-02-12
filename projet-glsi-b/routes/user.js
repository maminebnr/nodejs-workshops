const express = require('express');
const router = express.Router();

router.post('/create',(req,res)=>{
     console.log(req.body)
})
router.get('/list',(req,res)=>{
    res.send("list of users ")
})

module.exports = router;
