const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const authRoutes = require('./routes/auth')

//enable config in app server 
dotenv.config();

//create instance  of express
const app = express();

//enbale body parser middelware for body request handling
app.use(express.json())


//enable routes of authentification
app.use('/auth',authRoutes)

const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT


//connection to mongodb server and start application server on port 9002
mongoose.connect(MONGODB_URI).then(()=>{
    console.log("connected to mongodb server");
    app.listen(PORT,()=>{
        console.log(`server listening on 9002`)
    })
}).catch((err)=>{
    console.error('error connecting to mongodb server: ' + err.message)
})


