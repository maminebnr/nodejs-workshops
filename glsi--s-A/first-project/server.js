const http =require('http');

const server = http.createServer((req,res)=>{
      res.writeHead(200,{"Content-Type":"text/plain"})
      res.end('hello from my server')
})
server.listen(7000,()=>{
    console.log('server running on port 7000')
})