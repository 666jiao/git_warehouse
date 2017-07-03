/**
 * Created by Administrator on 2017/6/14.
 */
//DELETE FROM jd_user WHERE uid=?
//删除操作
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
        console.log(err)
    }else{
        var sql="DELETE FROM jd_user WHERE uid=?";
        conn.query(sql,[7],(err,result)=>{
            if(err){
                console.log(err);
            }else{
                console.log("删除成功"+result.affectedRows);
            }
            conn.release();
        });
    }
});

