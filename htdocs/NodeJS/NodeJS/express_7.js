
const mysql=require("mysql");
const http=require("http");
const express=require("express");
const qs=require("querystring");

var app=express();
var server=http.createServer(app);
server.listen(8080);


var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"dangdang",
    connectionLimit:10 //连接池 默认是10个
});

// app.use(express.static("public"));

//中间件
app.use((req,res,next)=>{
    console.log("use 0");
    console.log(req.url);
    next();
});

//中间件
app.use("/index",(req,res,next)=>{
    console.log("use 1"+new Date().toString());
    next();
});

app.get("/index",(req,res)=>{
    console.log("GET: /index");
    res.send("<h1>GET:Index</h1>");
})

app.get("/admin",(req,res)=>{
    console.log("GET: /admin");
    res.send("<h1>GET:admin</h1>");
})





// 查询图书
app.get("/book",(req,res)=>{
	pool.getConnection((err,conn)=>{
        var sql="SELECT * FROM book";
        conn.query(sql,(err,result)=>{
        	if(err) throw err;
            res.json(result);
            conn.release();
        });
	});
	// res.sendFile(__dirname+"/public/booklist.html");
});



// 添加图书
app.post("/addbook",(req,res)=>{
    req.on("data",(data)=>{
        console.log(data);
        console.log(data.toString());
        var obj=qs.parse(data.toString());
        console.log(obj);
        var t=obj.t,p=obj.p,i=obj.i;
        pool.getConnection((err,conn)=>{
	        var sql="INSERT INTO book VALUES(null,?,?,now(),?)";
	        conn.query(sql,[t,p,i],(err,result)=>{
	        	if(err) throw err;
	            res.json({code:1,bid:result.insertId});
	            conn.release();
	        });
		});
    })
})



// 删除图书
app.post("/dele",(req,res)=>{
    req.on("data",(data)=>{
        console.log(data);
        console.log(data.toString());
        var obj=qs.parse(data.toString());
        console.log(obj);
        var d=obj.d;
        pool.getConnection((err,conn)=>{
	        var sql="DELETE FROM book WHERE bid=?";
	        conn.query(sql,[d],(err,result)=>{
	        	if(err) throw err;
	            res.json({code:1,msg:"成功删除",bid:result.insertId});
	            conn.release();
	        });
		});
    })
})