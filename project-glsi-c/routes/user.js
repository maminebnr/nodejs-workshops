const express = require('express');
const router = express.Router();

router.post('/create', (req,res)=>{
   console.log(req.body);
});

router.get('/', (req,res)=>{
   res.json({data:'hello user one '})
});

//http://localhost:5000/user/path/?name=John&password=azerty
router.get('/path', (req,res)=>{
   res.json({name:req.query.name,password:req.query.password})
});

//http://localhost:5000/user/path/John/azerty
router.get('/path/:name/:password', (req,res)=>{
   res.json({name:req.params.name,password:req.params.password})
});
router.get('/glsi', (req,res)=>{
    res.json({data:'hello user glsi '})
 });

module.exports = router;