/**
 * Created by Administrator on 2017/6/14.
 */
// 查询操作
//SELECT * FROM jd_user
const mysql=require("mysql");
var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"jd",
    connectionLimit:10 //连接池 默认是10个
});

pool.getConnection((err,conn)=>{
    if(err){
        console.log(err);
    }else{
        var sql="SELECT * FROM jd_user LIMIT ?,?";
        conn.query(sql,[0,3],(err,result)=>{
            console.log(result);
            conn.release();
        });
    }
});

