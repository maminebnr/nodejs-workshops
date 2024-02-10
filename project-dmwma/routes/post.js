const express = require('express')
const router = express.Router()

router.get('/all',(req,res)=>{
    res.send([{title:"blog 1"},{title:"blog 2"},{title:"blog 3"}])
})

router.get('/postOne',(req,res)=>{
    res.send({title:"blog 1"})
})

module.exports = router