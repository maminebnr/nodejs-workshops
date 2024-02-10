const express = require('express')

const app = express()
app.get('/',(req,res)=>{
    res.json({success:200,message:'response successful'})
})

//http://localhost:5000/name/?name=amine
app.get('/name',(req,res)=>{
    res.send(req.query.name)
})
//http://localhost:5000/medamine/bnr
app.get('/:prenom/:nom',(req,res)=>{
    const name = req.params.prenom
    const lastname = req.params.nom

 res.send(`hello ${name} ${lastname}`)
})

app.get('/test',(req,res)=>{
    res.status(404).end()
})

app.get('/hello',(req,res)=>{
    res.status(404).send('product not found')
})

app.get('/olla',(req,res)=>{
    res.redirect(301,"https://www.google.com")
})

app.get('/example',(req,res,next)=>{
    console.log('test example 1 ')
    next()
},(req,res)=>{res.send({success:200,message:'response successful'})})

app.listen(5000,()=>{
    console.log('listening on port  5000');
})