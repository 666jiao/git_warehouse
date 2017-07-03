
const mysql=require("mysql");
const http=require("http");
const express=require("express");
const qs=require("querystring");

var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"bbs",
    connectionLimit:10 //连接池 默认是10个
});

var app=express();
var server=http.createServer(app);
server.listen(8080);
// app.listen(8080);

app.use(express.static("public"));

//中间件 拦截所有页面
app.use((req,res,next)=>{
    console.log(new Date().toString());
    console.log(req.url);
    next();
});

//中间件 拦截/index页面
// app.use("/index",(req,res,next)=>{
//     console.log("use 1"+new Date().toString());
//     next();
// });

// app.get("/index",(req,res)=>{
//     console.log("GET: /index");
//     res.send("<h1>GET:Index</h1>");
// })

// app.get("/admin",(req,res)=>{
//     console.log("GET: /admin");
//     res.send("<h1>GET:admin</h1>");
// })




// 查询留言
app.get("/msg",(req,res)=>{
	pool.getConnection((err,conn)=>{
        var sql="SELECT * FROM msg";
        conn.query(sql,(err,result)=>{
        	if(err) throw err;
            res.json(result);
            conn.release();
        });
	});
	// res.sendFile(__dirname+"/public/booklist.html");
});
//============================================================


// 添加留言
app.post("/addmsg",(req,res)=>{
    req.on("data",(data)=>{
        var obj=qs.parse(data.toString());
        console.log(obj);
        var i=obj.i,t=obj.t;
        pool.getConnection((err,conn)=>{
	        var sql="INSERT INTO msg VALUES(null,?,?,?)";
	        conn.query(sql,[i,t,new Date().getTime()],(err,result)=>{
	        	if(err) throw err;
	            res.json({code:1,mid:result.insertId});
	            conn.release();
	        });
		});
    })
})
//================================================================


// 更新时间 post方式
// app.post("/update",(req,res)=>{
//     req.on("data",(data)=>{
//         var obj=qs.parse(data.toString());
//         var t=obj.t;
//         pool.getConnection((err,conn)=>{
//             var sql="UPDATE msg SET pubtime=now() WHERE mid=?";
//             conn.query(sql,[t],(err,result)=>{
//                 if(err) throw err;
//                 res.json({code:1,msg:"时间更新成功"});
//                 conn.release();
//             })
//         })
//     })
// })

//更新时间 get方式
app.get("/update/:t",(req,res)=>{
    var t=req.params.t;
    pool.getConnection((err,conn)=>{
        var sql="UPDATE msg SET pubtime=? WHERE mid=?";
        conn.query(sql,[new Date().getTime(),t],(err,result)=>{
            if(err) throw err;
            res.json({code:1,msg:"时间更新成功"});
            conn.release();
        })
    });
});

//================================================================


// 删除留言post方式
app.post("/delete",(req,res)=>{
    req.on("data",(data)=>{
        var obj=qs.parse(data.toString());
        var t=obj.t;
        pool.getConnection((err,conn)=>{
	        var sql="DELETE FROM msg WHERE mid=?";
	        conn.query(sql,[t],(err,result)=>{
	        	if(err) throw err;
	            res.json({code:1,msg:"成功删除",state:result.protocol41});
	            conn.release();
	        });
		});
    })
})

// 删除留言get方式
// app.get("/delete",(req,res)=>{
//     var t=req.query.t;
//     pool.getConnection((err,conn)=>{
//         var sql="DELETE FROM msg WHERE mid=?";
//         conn.query(sql,[t],(err,result)=>{
//             if(err) throw err;
//             res.json({code:1,msg:"成功删除",mid:result.insertId});
//             conn.release();
//         });
//     });
// });
// =============================================================================
