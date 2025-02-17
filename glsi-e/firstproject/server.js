const http =require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'})
    res.end('hello from my server :)');
})

const PORT = 5000;
server.listen(PORT,()=>{console.log('server running on port check http://localhost:5000',5000)})