const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.routes')
const postRoutes = require('./routes/post.routes')

const app = express();
app.use(express.json())
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use('/user',userRoutes)
app.use('/post',postRoutes)

 
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('connecting to Database')
}).catch(err=>{
    console.log('error connecting to database',err)
})


const PORT = process.env.PORT || 7000;
app.listen(PORT,()=>{
console.log('server running on port 7000');
})