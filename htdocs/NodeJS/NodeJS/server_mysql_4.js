/**
 * Created by Administrator on 2017/6/14.
 */
//添加操作
const mysql=require("mysql");
//console.log(mysql);

var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"jd",
    connectionLimit:10 //连接池 默认是10个
});

pool.getConnection((err,conn)=>{
    if(err) console.log(err);
    else{
        var sql="INSERT INTO jd_product VALUES(null,?,?,?)";
        conn.query(sql,["玫瑰金10splus",9301.34,"images/phone/phone_39.jpg"],(err,result)=>{
                // console.log(result);
                if(result.affectedRows>0){
                    console.log("添加成功"+result.insertId);
                }else{
                    console.log("添加失败");
                }
                conn.release();
        });
    }
    
});


// var conn=mysql.createConnection({
//     host:"127.0.0.1",
//     user:"root",
//     password:"",
//     database:"jd"
// });


// var sql="INSERT INTO jd_product VALUES(null,?,?,?)";
// conn.query(sql,["玫瑰金8splus",12301.34,"images/phone/phone_37.jpg"],(err,result)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.dir(result);
//         if(result.affectedRows>0){
//             console.log("添加成功"+result.insertId);
//         }else{
//             console.log("添加失败");
//         }
//     }
// });

// conn.end();




