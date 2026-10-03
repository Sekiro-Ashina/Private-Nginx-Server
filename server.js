const http = require("http"); 
const fs = require("fs");
const path = require("path"); 

const port = 3000;

const server = http.createServer((req, res) =>{
    
}); //as soon as it created it will going to listen that port. And here we also get a callback


server.listen(port, () =>{
    console.log(`Server is listening on port : ${port}`);
})
