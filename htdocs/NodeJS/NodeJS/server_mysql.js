/**
 * Created by Administrator on 2017/6/14.
 */

// 废弃 容易泄露数据
const mysql=require("mysql");
//console.log(mysql);

var conn=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"jd"
});

var uname='xiaoming';
var upwd='123.ed';

var sql=`INSERT INTO jd_user VALUES(null,'${uname}','${upwd}')`;

conn.query(sql,(err,result)=>{
    if(err) console.log(err);
    else{
        // console.log(result);
        if(result.affectedRows>0) console.log("添加成功"+result.insertId);
        else console.log("添加失败");
    }
})

conn.end();