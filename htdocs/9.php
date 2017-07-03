<?php
	$name=$_REQUEST['name'];
	$tcount=$_REQUEST['tcount'];
	// 1:创建与mysql连接
	$conn=mysqli_connect('127.0.0.1','root','','dongdong');
	// 2:发送sql给mysql服务器
	$sql="INSERT INTO product VALUES(6,'$name',$tcount,'images/f5.png',now(),2987)";
	$result=mysqli_query($conn,$sql);
	// 3:获取返回结果判断
	if($result===true) echo '成功添加！'.mysqli_affected_rows($conn);
	else echo '添加失败！';
?>