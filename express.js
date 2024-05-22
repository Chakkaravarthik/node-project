import express from "express";

//create a serevr 

const server = express();

server.get("/",(req,res)=>{
    res.send("express server")
});


//port 
const port = 8000;
server.listen(port, ()=>{
    console.log('server listen on port', + port)
})