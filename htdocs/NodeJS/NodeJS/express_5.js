

const http=require("http");
const express=require("express");
const qs=require("querystring");

var app=express();
var server=http.createServer(app);
server.listen(8080);



app.get("/index",(req,res)=>{
	res.sendFile(__dirname+"/public/login_1.html");
});

app.post("/add",(req,res)=>{
    req.on("data",(data)=>{
        console.log(data);
        console.log(data.toString());
        var obj=qs.parse(data.toString());
        console.log(obj);
        var str=qs.stringify(obj);
        console.log(str);
    })
    res.send("<h1>OK!</h1><a href='http://127.0.0.1:8080/index'>返回</a>");
})

