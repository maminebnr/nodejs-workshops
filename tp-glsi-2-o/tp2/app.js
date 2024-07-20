const express = require('express');
const app = express();
app.use(express.json())
app.get('/hello',(req,res)=>{
    //res.send('<h1>Happy weekend </h1>');
    res.send({message:"Happy weekend"});
})

app.get('/health',(req,res)=>{
    res.json({status:200,message:'server working fine'})
})

app.get('/test',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/new',(req,res)=>{ 
    res.redirect('https://www.google.com')
})

app.get('/data',(req,res)=>{
    res.send({prenom:req.query.prenom,nom:req.query.nom,age:req.query.age})
})
app.get('/data/:prenom/:nom/:age',(req,res)=>{
    res.send({prenom:req.params.prenom,nom:req.params.nom,age:parseInt(req.params.age)})
})

app.post('/create',(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})
app.listen(9000,()=>{
    console.log(`Server listening on 9000`)
})