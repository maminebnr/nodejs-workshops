const express = require('express');
const voiture = require('./routes/voiture')
const app = express();
const port = 3000;
app.use(express.json());
app.use('/voiture',voiture)


app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(port,()=>{
    console.log('listening on port '+port);
})