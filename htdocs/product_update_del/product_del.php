<?php
	$id=$_REQUEST['id'];
	// 1:创建与mysql连接
	$conn=mysqli_connect('127.0.0.1','root','','dongdong');
	// 2:发送sql给mysql服务器
	$sql="DELETE FROM product WHERE id=$id";
	$result=mysqli_query($conn,$sql);
	// 3:获取返回结果判断
	if($result===true) echo '成功删除！'.mysqli_affected_rows($conn);
	else echo '删除失败！';

?>