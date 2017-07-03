<?php
	header("Content-type:application/json;charset=utf-8");
	@$cid=$_REQUEST['cid'] or die('{"code":-2,"msg":"用户是必须的"}');
	// 1:创建与mysql连接
	$conn=mysqli_connect('127.0.0.1','root','','jd');
	mysqli_query($conn,'SET NAMES UTF8');
	// 2:发送sql给mysql服务器
	$sql="DELETE FROM jd_cart WHERE cid=$cid";
	$result=mysqli_query($conn,$sql);
	// 3:获取返回结果判断
	if($result===true) echo '{"code":1,"msg":"删除成功"}';
	else echo '{"code":-1,"msg":"删除失败"}';

?>