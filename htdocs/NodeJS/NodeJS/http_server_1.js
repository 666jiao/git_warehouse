/**
 * Created by Administrator on 2017/6/14.
 */


const http=require("http");
const url=require("url");
const fs=require("fs");
var server=http.createServer();
server.listen(8080);
server.on("request",function(req,res){
    //5:客户端请求哪些资源 req
    //console.dir(req);
    console.log(req.method);
    console.log(req.url);
    console.log(req.httpVersion);
    var obj=url.parse(req.url,true);
    console.dir(obj);
    var path=obj.pathname;
    //响应客户端什么样数据 res
    //res.statusCode=200;
    res.setHeader("Content-Type","text/html;charset=utf-8");
    if(path==='/index'){
        fs.readFile('./public/index.html',function(err,data){
            if(err) throw err;
            res.write(data);
            res.end();
        });
    }else if(path==='/login'){
        fs.readFile('./public/login.html',function(err,data){
            if(err) throw err;
            res.write(data);
            res.end();
        });
    }else if(path==='/search'){
        fs.readFile('./public/search.html',function(err,data){
            if(err) throw err;
            res.write(data);
            res.end();
        });
    }else{
        fs.readFile('./public/404.html',function(err,data){
            if(err) throw err;
            res.statusCode=404;
            res.write(data);
            res.end();
        });
    }
});

//5.获取请求路径
//6.设置响应主题类型
//7.判断 /index /login   /search
//8.读取./public/index.html 并且发送客户端
//9.如果判断不成功返回 404 not found