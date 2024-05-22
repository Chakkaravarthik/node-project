import http from "http";

//creating  basic server 

const server = http.createServer((req,res)=>{
    res.end("Hello node js")
});

const port=8000;
server.listen(port,()=>{
    console.log("server listen")
})