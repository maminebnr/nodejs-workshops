const express = require('express');
const router = express.Router();

router.get('/all',(req,res)=>{
    res.send([{id:1,name:'John'},{id:2,name:'Doe'},{id:3,name:'Smith'},{id:4,name:'Alex'},{id:5,name:'Tom'},{id:6,name:'Jerry'},{id:7,name:'Mickey'},{id:8,name:'Donald'},{id:9,name:'Goofy'},{id:10,name:'Pluto'},{id:11,name:'Minnie'},{id:12,name:'Daisy'},{id:13,name:'Scrooge'},{id:14,name:'Huey'},{id:15,name:'Dewey'},{id:16,name:'Louie'},{id:17,name:'Webby'},{id:18,name:'Gyro'},{id:19,name:'Flintheart'},{id:20,name:'Gladstone'},{id:21,name:'Magica'},{id:22,name:'Beagle'},{id:23,name:'Gladstone'},{id:24,name:'Gladstone'},{id:25,name:'Gladstone'},{id:26,name:'Gladstone'},{id:27,name:'Gladstone'},{id:28,name:'Gladstone'},{id:29,name:'Gladstone'},{id:30,name:'Gladstone'},{id:31,name:'Gladstone'},{id:32,name:'Gladstone'},{id:33,name:'Gladstone'},{id:34,name:'Gladstone'},{id:35,name:'Gladstone'},{id:36,name:'Gladstone'},{id:37,name:'Gladstone'},{id:38,name:'Gladstone'},{id:39,name:'Gladstone'},{id:40,name:'Gladstone'},{id:41,name:'Gladstone'},{id:42,name:'Gladstone'},{id:43,name:'Gladstone'},{id:44,name:'Gladstone'},{id:45,name:'Gladstone'},{id:46,name:'Gladstone'},{id:47,name:'Gladstone'},{id:48,name:'Gladstone'},{id:49,name:'Gladstone'},{id:50,name:'Gladstone'},{id:51,name:'Gladstone'},{id:52,name:'Gladstone'}])
})

router.get('/one',(req,res)=>{
    res.send({id:1,name:'John'})
})

module.exports = router;