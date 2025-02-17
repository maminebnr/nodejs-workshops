const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('hello to my first project')
})
const PORT = 5000
server.listen(PORT,()=>{
    console.log('server running ... ')
})