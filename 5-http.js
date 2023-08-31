const http = require('http')

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.end("home page");
    }
        
    if(req.url === '/contact'){
        res.end("contact page");
    }
        
    if (!res.finished) {
      res.end(`
      <h1>Oops, page not found</h1>
      <a href="/">Back to home</a>
    `);
    }
})

server.listen(3000)