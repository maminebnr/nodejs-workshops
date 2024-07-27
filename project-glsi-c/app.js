const express = require('express')
const app = express();
const user = require('./routes/user')
const category = require('./routes/category')
const auth = require('./routes/auth')
const PORT = 9003

app.use('/auth',auth)



//https://github.com/maminebnr/
//middleware to parse the request body
app.use(express.json());
app.use('/user',user)
app.use('/category',category)

app.get('/', (req, res) => {
    res.send('<h1>Welcome!</h1>');
})

app.get('/health', (req, res) => {
    res.json({status:200,message:'server working fine '});
})

app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/new', (req, res) => {
    console.log(req.headers)
    res.redirect('https://www.google.com');
})

app.post('/create', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})
//create a new server instance with the default 
app.listen(PORT,()=>{
    console.log('server listening on port 9003')
})