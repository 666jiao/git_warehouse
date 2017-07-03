
var mysql=require("mysql");
var fs=require("fs");
var url=require("url");
var http=require("http");

var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"tmooc",
    connectionLimit:10 //连接池 默认是10个
});


// netstat -an
var server=http.createServer();
server.listen(8080);
server.on("request",(req,res)=>{
	var obj=url.parse(req.url,true),path=obj.pathname;
 	res.setHeader("Content-Type","text/html;charset=utf-8");
 	if(path==='/stu/add'){
        fs.readFile("./public/stu/add.html",(err,data)=>{
            if(err) throw err;
            res.write(data);
            res.end();
        })
    }else if(path==='/stu/add.do'){
    	var n=obj.query.sname;
        var p=obj.query.score;
        var s=obj.query.schoolTime;
        console.log(n,p,s);
        pool.getConnection((err,conn)=>{
		    var sql="INSERT INTO stu VALUES(null,?,?,?)";
		    conn.query(sql,[n,p,s],(err,result)=>{
		             if(result.affectedRows>0){
		                console.log("添加成功"+result.insertId);
		                res.end("<b>添加成功</b>");
		            }else{
		                console.log("添加失败");
		                res.end("<b>添加失败</b>");
		            }
		            conn.release();
		    });
		});
    }else if(path==='/stu/list'){
    	pool.getConnection((err,conn)=>{
		    if(err) console.log(err);
		    else{
		        var sql="SELECT * FROM stu";
		        conn.query(sql,(err,result)=>{
		        	console.log(result[0].sid,result);
		        	if(err) throw err;
		        	res.setHeader("Content-Type","application/json;charset=utf-8");
		    		var str =JSON.stringify(result);
              //       for(var i=0,s='';i<result.length;i++){
              //           s+=`<tr>
              //                   <td>${result[i].sid}</td>
              //                   <td>${result[i].sname}</td>
              //                   <td>${result[i].score}</td>
              //                   <td>${result[i].schoolTime}</td>
              //               </tr>`
              //       }
              //        s="<table border='1' width='100%' style='border-collapse:collapse;text-align:center;'><thead><tr><th>编号</th><th>学生</th><th>分数</th><th>入学时间</th></tr></thead><tbody>"+s+"</tbody></table>";
              //       res.write(s);
                    res.write(str);
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