function isPrime(num){
	var start=new Date().getTime();
	do{
		var now=new Date().getTime();
	}while(now-start<=5000);

	for(var i=2;i<num;i++) if(num%i==0) break;
	if(i<num) return false; else return true;
}

var num=999999999999999999999;
console.time("si");
var s=isPrime(num);
console.timeEnd("si");
console.log(num+"是质数吗?"+s);


