const ws=require('ws');

var server=new ws.Server({port:9001});

console.log("ws服务器开始监听端口9001");

server.on("connection",(socket)=>{
	console.log("ws服务器接受到一个连接");
	var counter=0;
	var timer=setInterval(()=>{
		counter++;
		socket.send("I am Server - "+counter+' : '+new Date().getTime());
	},1000)

	socket.on("message",(msg)=>{
		console.log("服务器接受消息"+msg);
	})

	socket.on("close",()=>{
		console.log("客户端断开了连接");
		clearInterval(timer);
	})
})