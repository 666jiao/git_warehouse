

const http=require("http");
const express=require("express");
var app=express();
var server=http.createServer(app);
server.listen(8080);
app.get("/",(req,res)=>{
	res.send("<h1>首页</h1>");
});

// GET /index
app.get("/inde",(req,res)=>{
	res.sendFile(__dirname+"/public/inde.html");
});

// GET /css
app.get("/style",(req,res)=>{
	res.sendFile(__dirname+"/public/css/style.css");
});

// GET /logo
app.get("/logo",(req,res)=>{
	res.sendFile(__dirname+"/public/images/1.jpg");
});

// GET /jquery
app.get("/jquery",(req,res)=>{
	res.sendFile(__dirname+"/public/js/jquery-1.11.3.js");
});