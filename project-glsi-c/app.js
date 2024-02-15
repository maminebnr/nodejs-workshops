const express = require('express')
const app = express();
const user = require('./routes/user')


//https://github.com/maminebnr/
//middleware to parse the request body
app.use(express.json());
app.use('/user',user)
app.get('/', (req, res) => {
    res.send('<h1>Welcome!</h1>');
})

app.get('/health', (req, res) => {
    res.json({status:200,message:'server working fine '});
})

app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
//create a new server instance with the default 
app.listen(9002,()=>{
    console.log('server listening on port 9002')
})