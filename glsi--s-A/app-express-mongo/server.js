const express = require('express');
const mongoose = require('mongoose');
const app = express();


mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('connecting to Database')
}).catch(err=>{
    console.log('error connecting to database',err)
})


const PORT = process.env.PORT || 7000;
app.listen(PORT,()=>{
console.log('server running on port 7000');
})