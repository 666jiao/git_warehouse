onmessage=function(e){
	console.log("worker线程接收到数据，开始计算");
	var n=e.data;
	n=parseInt(n);
	var sum=0;
	for(var i=0;i<n;i++) sum+=i;
	postMessage(sum);
}




// function isPrime(num){
// 	var start=new Date().getTime();
// 	do{
// 		var now=new Date().getTime();
// 	}while(now-start<=5000);

// 	for(var i=2;i<num;i++) if(num%i==0) break;
// 	if(i<num) return false; else return true;
// }

// var num=999999999999999999999;
// console.time("执行时间");
// var s=isPrime(num);
// console.timeEnd("执行时间");
// console.log(num+"是质数吗?"+s);

