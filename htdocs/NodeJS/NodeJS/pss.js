var str = "";
for(var i=1;i<10;i++){
    for(var j=1;j<=i;j++){
        str += `${j}*${i}=${i*j}`;
        //ES6 新特性,NodeJS不存在兼容性
    }
    str += "\r\n";
}
console.log(str);


var s=[50,60,70,80,90];

for(var i=0;i<s.length;i++){
    console.log(i+'=>'+s[i]);
}

for(var i of s){
    console.log(i);
}

for(var i in s){
    console.log(i+'=>'+s[i]);
}
console.log("======================================================================");

function a(){
    console.log("index")
}

function b(){
    console.log("search")
}

function c(){
    console.log("login")
}
var path="/search";
if(path=="/index") a();
else if(path=="/search") b();
else if(path=="/login") c();


switch(path){
    case "/index":
        a();
        break;
    case "/search":
        b();
        break;
    case "/login":
        c();
        break;
    default:a();
        break;
}

console.log("======================================================================");

//for(var i=2;i<=100;i++){
//   for(var j=2;j<i;j++){
//       if(i%j==0) break;
//   }
//   if(j==i) console.log(i);
//}
//
//for(var i=2;i<2;i++){} console.log(i);


// for(var i=2;i<100;i++){
//     for(var j=2;j<=i/2;j++) if(i%j==0) break;
//     if(j>i/2) console.log(i);
// }
// console.log(i);
for(var i=2;i<100;i++){
   for(var j=2;j<i;j++) if(i%j==0) break;
   if(i==j) console.log(i);
}




