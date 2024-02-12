const express = require('express')
const router = express.Router()


router.post('/create',(req,res)=>{
    console.log(req.body)
})
router.get('/login',(req,res)=>{
    //res.send('hello login')
    res.sendFile(__dirname+'/index.html')
})

router.get('/register',(req,res)=>{
    res.send('hello register')
})

router.get('/',(req,res)=>{
    res.send('hello Malek !')
})



module.exports = router