

const http=require("http");
const express=require("express");
var app=express();
var server=http.createServer(app);
server.listen(8080);

// 参数方式一
// GET /user?uid=10&loc=bj
app.get("/user",(req,res)=>{
	console.log(req.query.uid);
	console.log(req.query.loc);
	res.send("http://127.0.0.1:8080/uid="+req.query.uid+"&loc="+req.query.loc);
});

//参数方式二
// GET /book/99/jsj
// GET /book/101/wx
app.get("/book/:bid/:btype",(req,res)=>{
	console.log(req.params.bid);
	console.log(req.params.btype);
	res.send("http://127.0.0.1:8080/book/"+req.params.bid+"/"+req.params.btype);
});




