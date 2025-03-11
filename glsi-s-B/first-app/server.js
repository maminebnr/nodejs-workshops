const http = require('http')
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('hello from my server !')
})
server.listen(9002,()=>{
    console.log('listening on http://localhost:9002')
})