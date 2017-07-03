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

	if(path==='/userlistzz'){
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
    }else if(path==='/userlist'){
    	pool.getConnection((err,conn)=>{
		    if(err){
		        console.log(err);
		    }else{
		        var sql="SELECT * FROM jd_user";
		        conn.query(sql,(err,result)=>{
		            console.log(result[0].uid);
                    var s="<table border='1' width='100%' style='border-collapse:collapse;text-align:center;'>";
                        s+="<thead><tr><th>编号</th><th>用户名</th><th>密码</th></tr></thead><tbody>";
                        for(var i=0;i<result.length;i++){
                            s+=`<tr>
                                    <td>${result[i].uid}</td>
                                    <td>${result[i].uname}</td>
                                    <td>${result[i].upwd}</td>
                                </tr>`
                        }
                        s+="</tbody></table>";
                        res.write(s);
    	                res.end();
    		            conn.release();
		        });
		    }
		});
    }else{
        res.statusCode=404;
        res.end("<b>您请求的资源不存在</b>");
    }
});