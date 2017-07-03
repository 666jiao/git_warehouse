const mysql=require("mysql");
const http=require("http");
const express=require("express");
const qs=require("querystring");
// const pool=require("./pool");

var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"jd",
    connectionLimit:10 //连接池 默认是10个
});


var app=express();
var server=http.createServer(app);
server.listen(8080);

app.use(express.static("public"));

app.get("/",(req,res)=>{
	res.redirect('login.html');
});

app.post("/login",(req,res)=>{
	req.on("data",(data)=>{
		var obj=qs.parse(data.toString());
        console.log(obj);
        var u=obj.u,p=obj.p;
		pool.getConnection((err,conn)=>{
	        var sql="SELECT * FROM jd_user WHERE uname=? AND upwd=?";
	        conn.query(sql,[u,p],(err,result)=>{
	        	console.log(result.length,result);
	        	if(result.length>0){
	        		var output={
	        			code:1,
	        			msg:"登陆成功",
	        			uid:result[0].uid,
	        			uname:result[0].uname
	        		};
	        	}else{
	        		var output={
	        			code:2,
	        			msg:"用户名或密码错误",
	        		};
	        	}
	            res.json(output);
	            conn.release();
	        });
		});
	});
})


app.get("/regist",(req,res)=>{
	var d=req.query.uname;
	pool.getConnection((err,conn)=>{
        var sql="select * from jd_user where uname=?";
        conn.query(sql,[d],(err,result)=>{
        	if(err) throw err;
        	if(result.length>0){
        		var output={
        			code:1,
        			msg:"用户名已被注册"
        		};
        	}else{
        		var output={
        			code:2,
        			msg:"用户名可以使用",
        		};
        	}
            res.json(output);
            conn.release();
        });
	});
})

app.post("/register",(req,res)=>{
	req.on("data",(data)=>{
		var obj=qs.parse(data.toString());
		pool.getConnection((err,conn)=>{
			var sql="SELECT * FROM jd_user WHERE uname=?";
			conn.query(sql,[obj.uname],(err,result)=>{
				if(result.length>0){
					var output={code:-1,msg:"注册失败"};
					res.json(output);
					conn.release();
				}else{
					sql="INSERT INTO jd_user VALUES(null,?,?,?)";
					conn.query(sql,[obj.uname,obj.upwd,obj.homepage],(err,result)=>{
						if(err) throw err;
						var output={code:1,msg:"注册成功"};
						res.json(output);
						conn.release();
					})
				}
			})
			


		})
	})
})

// svg统计图
app.get("/svgstat",(req,res)=>{
	var output=[
		{label:"1月",value:3000},
		{label:"2月",value:4000},
		{label:"3月",value:5000},
		{label:"4月",value:6000},
		{label:"5月",value:7000},
		{label:"6月",value:1000},
		{label:"7月",value:4000},
		{label:"8月",value:2000},
		{label:"9月",value:6000},
		{label:"10月",value:3000},
		{label:"11月",value:7000},
		{label:"12月",value:4000}
	]
	res.json(output);
})

// canvas统计图
app.get("/canvasstat",(req,res)=>{
	var barChartData = {
			labels : ["骚男","小虎","小草","韩梅梅","小丽","小智","小红","小明"],
			datasets : [
				{
					fillColor : hs(),
					strokeColor : hs(),
					data : [65,59,90,81,56,55,40,60]
				},
				{
					fillColor : hs(),
					strokeColor : hs(),
					data : [28,48,40,19,96,27,100,50]
				}
			]
			
		}
		res.json(barChartData);
})


// 我的订单
app.get("/orders",(req,res)=>{
	var d=req.query.uid;
	pool.getConnection((err,conn)=>{
        var sql="select p.pic,p.pname,p.price,d.count "
        sql+="from jd_order o,jd_order_detail d,jd_product p where d.orderId=o.oid and d.productId=p.pid and o.userId=?";
        conn.query(sql,[d],(err,result)=>{
        	if(err) throw err;
            res.json(result);
            conn.release();
        });
	});
})

// =============================================
app.get("/getlist",(req,res)=>{
	pool.getConnection((err,conn)=>{
        var sql="SELECT * FROM jd_order";
        conn.query(sql,(err,result)=>{
        	if(err) throw err;
            res.json(result);
            conn.release();
        });
	});
})
// ==============================================


function rg(){
  var r=Math.floor(Math.random()*256);
  var g=Math.floor(Math.random()*256);
  var b=Math.floor(Math.random()*256);
  var a=Math.random();
  return `rgba(${r},${g},${b},${a})`;
}

function hs(){
  var h=Math.floor(Math.random()*361);
  var s=Math.floor(Math.random()*101);
  var l=Math.floor(Math.random()*101);
  var a=Math.random();
  return `hsla(${h},${s}%,${l}%,${a})`;
}

function rn(min,max){
	var n=Math.floor(Math.random()*(max-min)+min);
	return n;
}

function rc(min,max){
  var r=rn(min,max);
  var g=rn(min,max);
  var b=rn(min,max);
  return `rgb(${r},${g},${b})`;
}