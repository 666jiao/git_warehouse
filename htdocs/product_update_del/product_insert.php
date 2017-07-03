<?php

	// $id=$_REQUEST['id'];
	$name=$_REQUEST['name'];
	$tcount=$_REQUEST['tcount'];
	// 1:创建与mysql连接
	$conn=mysqli_connect('127.0.0.1','root','','dongdong');
	mysqli_query($conn,'SET NAMES UTF8');
	// 2:发送sql给mysql服务器
	// $sql="SET NAMES GBK";
	$sql="INSERT INTO product VALUES(null,'$name','$tcount','images/f46.png',now(),2987)";
	$result=mysqli_query($conn,$sql);
	// 3:获取返回结果判断
	if($result===true) echo '成功添加！'.mysqli_affected_rows($conn);
	else echo '添加失败！';

?>