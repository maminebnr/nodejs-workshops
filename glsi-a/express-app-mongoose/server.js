const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const userRoutes = require('./routes/user.routes')
const app = express();

app.use(express.json())

app.use('/users',userRoutes)

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('connected to database server')
}).catch(err => console.log(err))
app.listen(process.env.PORT,()=>{
    console.log('listening on port '+process.env.PORT);
})