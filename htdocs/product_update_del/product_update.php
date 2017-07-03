<?php

	$id=$_REQUEST['id'];
	$conn=mysqli_connect('127.0.0.1','root','','dongdong');
	// 2:发送sql给mysql服务器
	$sql="UPDATE product SET piace=piace*1.2 WHERE id=$id";
	$result=mysqli_query($conn,$sql);
	if($result===true) echo '成功更新！'.mysqli_affected_rows($conn);
	else echo '更新失败！';

?>