const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('hello from server node ')
})

server.listen(9001,()=>{
    console.log('server listening on port 9000')
})