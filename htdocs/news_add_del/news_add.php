<?php

	header('Content-Type: text/html;charset=utf-8'); 

	// $id=$_REQUEST['id'];
	$name=$_REQUEST['name'];
	$tcount=$_REQUEST['tcount'];
	// 1:创建与mysql连接
	$conn=mysqli_connect('127.0.0.1','root','','ifeng');
	mysqli_query($conn,'SET NAMES UTF8');
	// 2:发送sql给mysql服务器
	// $sql="SET NAMES GBK";
	$sql="INSERT INTO t_news VALUES(null,'$name','$tcount',now(),2987)";
	$result=mysqli_query($conn,$sql);
	// 3:获取返回结果判断
	if($result===true) echo '成功添加！'.mysqli_affected_rows($conn);
	else echo '添加失败！';

	// 检测
	// 127.0.0.1/news_add.php?name=hi&tcount=hihi
?>