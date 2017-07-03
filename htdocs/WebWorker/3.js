onmessage=function(e){
	console.log("worker结瘦");
	var num=e.data;
	num=parseInt(num);
}


// 事不关己高高挂起

function isPrime(num){
	var start=new Date().getTime();
	do{
		var now=new Date().getTime();
	}while(now-start<=5000);

	for(var i=2;i<num;i++) if(num%i==0) break;
	if(i<num) return false; else return true;
}

var num=999999999999999999999;
console.time("执行时间");
var s=isPrime(num);
console.timeEnd("执行时间");
console.log(num+"是质数吗?"+s);

