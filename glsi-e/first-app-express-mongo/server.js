const express = require('express');
const mongoose= require('mongoose');
require('dotenv').config()
const userRoutes = require('./routes/user.route')
const app = express();
 app.use(express.json())
app.use('/users',userRoutes)
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('connecting to server database');
}).catch(err => console.log(err))
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log('listening on port 7000');
})
