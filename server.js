const http = require("http"); 
const fs = require("fs");
const path = require("path"); 

const port = 3000;

const server = http.createServer((req, res) =>{ //as soon as it created it will going to listen that port. And here we also get a callback
    //so in order to send the response (the file) we need to find the path of this file in order to serve. And that's where path.join comes in. Explain.
    const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

    const extName = String(path.extname(filePath)).toLowerCase(); //wtf is this?

     
}); 


server.listen(port, () =>{
    console.log(`Server is listening on port : ${port}`);
})
