const express = require('express');
const router = express.Router();
const items = [{id:1,name:'product 1',price:100},{id:2,name:'product 2',price:200},{id:3,name:'product 3',price:300}]

router.get('/all',(req,res)=>{
    res.send(items)
})

router.get('/:id',(req,res)=>{
    const itemId = parseInt(req.params.id)
    const item = items.find(item =>item.id === itemId);
    if(item){
        res.send(item);
    }else{
        res.status(404).send('product not found ')
    }
}
)
router.delete('/item/:id',(req,res)=>{
    const itemId = parseInt(req.params.id)
    const item = items.find(item =>item.id === itemId);
    if(item){
        const data = items.filter(item => item.id !== itemId)
        res.send(data);
    }else{
        res.status(404).send('product not found ')
    }
})



module.exports = router