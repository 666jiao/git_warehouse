/**
 * Created by Administrator on 2017/6/14.
 */
//添加操作
const mysql=require("mysql");
//console.log(mysql);

var conn=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"jd"
});

var sql="INSERT INTO jd_user VALUES(null,?,?)";

conn.query(sql,["james","123"],(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.dir(result);
        if(result.affectedRows>0){
            console.log("添加成功"+result.insertId);
        }else{
            console.log("添加失败");
        }
    }
});

conn.end();