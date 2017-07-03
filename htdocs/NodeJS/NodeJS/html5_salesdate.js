
// const http=require("http");
const express=require("express");
// const qs=require("querystring");

var app=express();
// var server=http.createServer(app);
// server.listen(8080);
app.listen(8080);


app.use(express.static("public"));

app.get("/salesdate/:t/:l/:s/:d/:a/:w/:p/:u/:e",(req,res)=>{
	var t=req.params.t,l=req.params.l,s=req.params.s,
	d=req.params.d,a=req.params.a,w=req.params.w,
	p=req.params.p,u=req.params.u,e=req.params.e;
	console.log(t,l,s,d,a,w,p,u,e);
	res.json([
      {"label":"部门1","value":100},
      {"label":"部门2","value":200},
      {"label":"部门3","value":150},
      {"label":"部门4","value":190}
	]);
});