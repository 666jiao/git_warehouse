/**
 * Created by Administrator on 2017/6/14.
 */

// ���� ����й¶����
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
        if(result.affectedRows>0) console.log("��ӳɹ�"+result.insertId);
        else console.log("���ʧ��");
    }
})

conn.end();