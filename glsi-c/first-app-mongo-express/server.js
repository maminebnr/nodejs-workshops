const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const UserRoutes = require('./routes/user.routes')
const AuthRoutes = require('./routes/auth.routes')
const PostRoutes = require('./routes/post.routes')

const app = express();

app.use(express.json())

app.use('/users',UserRoutes)
app.use('/auth',AuthRoutes)
app.use('/post',PostRoutes)


const PORT = process.env.PORT || 3000
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('connecting to Database')
}).catch(err=>{
    console.log('error connecting to Database',err)
})

app.listen(PORT,()=>{
    console.log('listening on port 5000' )
})