const express = require('express');
const router = express.Router();

router.get('/list',(req,res)=>{
    res.send("list of users ")
})

module.exports = router;
