const http = require('http');

//create server 
const server = http.createServer((req,res)=>{
   res.writeHead(200,{'Content-Type': 'text/plain'});
   res.end('Bienvenue sur mon nouveau serveur ')
});

const PORT = 7000;
server.listen(PORT,()=>{
    console.log('server listening on port '+PORT);
})