/**
 * Created by Administrator on 2017/6/13.
 */
// js对象和字符串互转模块
const qs=require("querystring");
var str="uname=tom&age=10&pno=1001";
var obj=qs.parse(str);
console.log(obj);

var obj2={ename:"tom",age:20};
var str=qs.stringify(obj2);
console.log(str);

//========================================================


// 地址路径解析模块
const url=require("url");
var u="http://www.tmooc.cn:443/ad/index?uname=tom&age=10";
var obj=url.parse(u,true);
console.dir(obj);
var obj1=url.parse(u);
console.dir(obj1);


//=========================================================

//创建缓存区模块
var buf1=Buffer.alloc(10);
console.log(buf1);
var buf2=Buffer.alloc(1024*3);
console.log(buf2);
var buf3=Buffer.from([1,2,3]);
console.log(buf3);
var buf4=Buffer.from("玩服务器看你的");
console.log(buf4,buf4.toString());

//=============================================================

// 文件处理模块
//同步加载 读取 输出文件内容
const fs=require("fs");
var path="./public/index.html";
var data=fs.readFileSync(path);
console.log(data);
console.log(data.toString());


//同步写入文件内容
var str=new Date().toString()+"时间线";
console.log("1:文件写入开始,"+str);
var path="./public/2.log";
//fs.writeFileSync(path,str);//覆盖模式
fs.appendFileSync(path,str);//追加模式
console.log("2.文件写入结束,"+str);

//同步复制一个文件
var data=fs.readFileSync("./public/4.css");//读取操作
fs.writeFileSync("./public/b.backup.css",data);//写入操作


//异步读取文件内容
var path="./public/index.html";
console.log("1:读取文件开始");
fs.readFile(path,function(err,data){
    if(err){
        console.log("2:文件读取出错");
        console.log(err);
    }else{
        console.log("3:文件读取成功");
        console.log(data.toString());
    }
});
console.log("4:读取文件结束");

//异步写入数据
var str=(Math.random()*111).toString();
console.log("1:写入文件开始");
var path="./public/3.log";
fs.appendFile(path,str,function(err){// 写入文件追加模式
//fs.writeFile(path,str,function(err){// 写入文件覆盖模式
        if(err){
            console.log("2:文件写入出错");
            console.log(err);
        }else{
            console.log("3:文件写入成功");
        }
});
console.log("4:写入文件结束");


//异步复制一个文件
var path="./public/4.css";
fs.readFile(path,function(err,data){
    if(err){
        console.log("1:文件读取出错");
        console.log(err);
    }else{
        console.log("2:文件读取成功");
        console.log(data.toString());
        fs.writeFile("./public/44.backup.css",data.toString(),function(err){//写入文件覆盖模式
            if(err){
                console.log("3:文件写入出错");
                console.log(err);
            }else{
                console.log("4:文件写入成功");
            }
        });
    }
});




//===============================================================













