const http = require('http');
const port = 9000

//create native nodejs server 
const server = http.createServer((req,res) =>{
    if(req.method === 'GET' && req.url === '/hello'){
        res.writeHead(200,{'Content-Type': 'text/plain'})
        res.end('Bonjour les amis ')
    }else{
        res.writeHead(404,{'Content-Type': 'text/plain'})
        res.end('Route not found')
    }
})

server.listen(port,()=>{
    console.log(`server listening on ${port}`)
})