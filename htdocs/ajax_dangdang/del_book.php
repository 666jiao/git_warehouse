<?php
	@$bid=$_REQUEST['bid'] or die("-2");
	// 1:创建与mysql连接
	$conn=mysqli_connect('127.0.0.1','root','','dangdang');
	mysqli_query($conn,'SET NAMES UTF8');
	// 2:发送sql给mysql服务器
	$sql="DELETE FROM dd_book WHERE bid=$bid";
	$result=mysqli_query($conn,$sql);
	// 3:获取返回结果判断
	if($result===true) echo '1';
	else echo '-1';

?>