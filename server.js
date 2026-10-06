const http = require("http"); 
const fs = require("fs");
const path = require("path"); 

const port = 3000;

const server = http.createServer((req, res) =>{ //as soon as it created it will going to listen that port. And here we also get a callback
    //so in order to send the response (the file) we need to find the path of this file in order to serve. And that's where path.join comes in. Explain.
    const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

    const extName = String(path.extname(filePath)).toLowerCase(); //wtf is this?

    const mimeType = {
        '.html': 'text/html',
        '.css' : 'text/css',
        '.js' : 'text/javascript',
        '.png' : 'text/png'
    }
     //types of file my server is supporting - there are 1000s types of files server dont accept all kind of files - so if a server is not accepting a particular type of file then you knew that file is not mention here. Explain.

     const contentType = mimeType[extName] || 'application-octet-stream'; // explain

     
}); 


server.listen(port, () =>{
    console.log(`Server is listening on port : ${port}`);
})
