var age=22;
function connect(){
    console.log("连接系统");
}

function close(){
    console.log("关闭系统");
}

exports.age=age;
exports.connect=connect;

console.log("======================================================================");

const PI=3.14;

function getSize(r){
    return PI*r*r;
}

function getPerimeter(r){
    return PI*r*2;
}

exports.getSize=getSize;
exports.getPerimeter=getPerimeter;


console.log("======================================================================");


//求和
function sum(arr){
    var s=0;
    for(var i=0;i<arr.length;i++){
        s+=arr[i];
    }
    return s;
}

//求平均值
function avg(arr){
    return sum(arr)/arr.length;
}


//exports.sum=sum;
//exports.avg=avg;

module.exports.sum=sum;
module.exports.avg=avg;

console.log("======================================================================");


var n=10;
console.log(n++);
console.log(n);


console.log("======================================================================");


























