const express = require('express')
const router = express.Router()

router.get('/all',(req,res)=>{
    res.send([{id:1, name:'product 1'},{id:2, name:'product 2'},{id:3, name:'product 3'},{id:4, name:'product 4'},{id:5, name:'product 5'},{id:6, name:'product 6'},{id:7, name:'product 7'},{id:8, name:'product 8'},{id:9, name:'product 9'},{id:10, name:'product 10'},{id:11, name:'product 11'},{id:12, name:'product 12'},{id:13, name:'product 13'},{id:14, name:'product 14'},{id:15, name:'product 15'},{id:16, name:'product 16'},{id:17, name:'product 17'},{id:18, name:'product 18'},{id:19, name:'product 19'},{id:20, name:'product 20'},{id:21, name:'product 21'},{id:22, name:'product 22'},{id:23, name:'product 23'},{id:24, name:'product 24'},{id:25, name:'product 25'},{id:26, name:'product 26'},{id:27, name:'product 27'},{id:28, name:'product 28'},{id:29, name:'product 29'},{id:30, name:'product 30'},{id:31, name:'product 31'},{id:32, name:'product 32'},{id:33, name:'product 33'},{id:34, name:'product 34'},{id:35, name:'product 35'},{id:36, name:'product 36'},{id:37, name:'product 37'},{id:38, name:'product 38'},{id:39, name:'product 39'},{id:40, name:'product 40'},{id:41, name:'product 41'},{id:42, name:'product 42'},{id:43, name:'product 43'},{id:44, name:'product 44'},{id:45, name:'product 45'}])
})

router.get('/one',(req,res)=>{
    res.send({id:1, name:'product 1'})
})

module.exports = router