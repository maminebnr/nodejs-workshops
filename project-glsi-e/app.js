const express = require('express')
const product = require('./routes/product')
const app = express()

//create a middleware for parsing the body of the request
app.use(express.json())
app.post('/create',(req,res)=>{
  console.log(req.body)
})
app.use('/product', product)
app.get('/template', (req, res) => {
    res.sendFile(__dirname+'/index.html')
})

app.get('/', (req, res) => {
    //res.send('<h1>Hello World</h1>')
    //res.json({message: 'Hello World'})
    res.redirect('/template')
})
app.listen(5000, () => {
  console.log('Server is running on port 5000')
})