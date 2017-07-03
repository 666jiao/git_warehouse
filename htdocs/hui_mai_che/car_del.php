<?php
	$cid=$_REQUEST['cid'];
	// 1:创建与mysql连接
	require('init.php');
	// 2:发送sql给mysql服务器
	$sql="DELETE FROM car WHERE cid=$cid";
	$result=mysqli_query($conn,$sql);
	// 3:获取返回结果判断
	if($result===true) echo '成功删除'.mysqli_affected_rows($conn).'条记录';
	else echo '删除失败！';

?>

<a href="http://127.0.0.1/hui_mai_che/car_select.php">返回</a>
