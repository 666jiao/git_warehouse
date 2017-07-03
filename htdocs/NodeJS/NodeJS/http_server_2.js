/**
 * Created by Administrator on 2017/6/14.
 */
const http=require("http");
const url=require("url");
const fs=require("fs");
var server=http.createServer();
server.listen(8080);
server.on("request",(req,res)=>{
    var obj=url.parse(req.url,true);
    console.log(obj.query.uname,obj.query.upwd);
    var path=obj.pathname;
    res.setHeader("Content-Type","text/html;charset=utf-8");
    if(path==='/register'){
        fs.readFile("./public/register.html",(err,data)=>{
            if(err) throw err;
            res.write(data);
            res.end();

            //如果只发送一次
            //res.end(data);
        })
    }else if(path==='/register.do'){
        var n=obj.query.uname;
        var p=obj.query.upwd;
        console.log(n,p);
        var data=n+"_"+p+'\r\n';
        fs.appendFile('./public/user.log',data,(err)=>{
            res.end("<b>注册成功</b>");
        })
    }else{
        res.statusCode=404;
        res.end("<b>您请求的资源不存在</b>");
    }
});