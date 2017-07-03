var fs=require("fs");
const path='./test';
fs.stat(path,(err,stats)=>{
	if(err){
		// console.log(err);
		fs.mkdir(path)//创建文件夹

	}else{
		fs.rmdir(path)//删除文件夹
		// console.log(stats);
		// fs.readdir(path,(err,list)=>{
		// 	console.log(list);
		// })
	}
})