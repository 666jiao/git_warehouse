// public/register.html
// 

var http=require("http");
var mysql=require("mysql");
var fs=require("fs");
var url=require("url");

var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"jd",
    connectionLimit:10 //连接池 默认是10个
});

var server=http.createServer();
server.listen(8080);
server.on("request",(req,res)=>{
	var obj=url.parse(req.url,true);
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
        pool.getConnection((err,conn)=>{
		    var sql="INSERT INTO jd_user VALUES(null,?,?)";
		    conn.query(sql,[n,p],(err,result)=>{
		            // console.log(result);
		             if(result.affectedRows>0){
		                console.log("注册成功"+result.insertId);
		                res.end("<b>注册成功</b>");
		            }else{
		                console.log("注册失败");
		                res.end("<b>注册失败</b>");
		            }
		            conn.release();
		    });
		});
    }else if(path==='/login'){
    	 fs.readFile("./public/login.html",(err,data)=>{
            if(err) throw err;
            res.write(data);
            res.end();

            //如果只发送一次
            //res.end(data);
        })
    }else if(path==='/login.do'){
    	var n=obj.query.uname;
        var p=obj.query.upwd;
        console.log(n,p);
    	pool.getConnection((err,conn)=>{
		    if(err){
		        console.log(err);
		    }else{
		        var sql="SELECT * FROM jd_user WHERE uname=? AND upwd=?";
		        conn.query(sql,[n,p],(err,result)=>{
		            console.log(result);
		            if(result.length===0){
		            	res.end("<b>登录失败</b>");
		            }else{
		            	res.end("<b>登录成功</b>");
		            }
		            conn.release();
		        });
		    }
		});
    }else{
        res.statusCode=404;
        res.end("<b>您请求的资源不存在</b>");
    }
});
