
//Express框架默认处理404

const http=require("http");
const express=require("express");
var app=express();
var server=http.createServer(app);
server.listen(8080);
app.get("/",(req,res)=>{
	res.send("<h1>首页</h1>");
});


app.get("/index",(req,res)=>{
	res.sendFile(__dirname+"/public/index.html");
});