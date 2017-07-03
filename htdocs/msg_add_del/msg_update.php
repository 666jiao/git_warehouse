<?php
	@$mid=$_REQUEST['mid']or die('编号必须有');
	// @$uname=$_REQUEST['uname']or die('uname必须有');
	@$phone=$_REQUEST['phone']or die('phone必须有');
	@$content=$_REQUEST['content']or die('content必须有');
	// 1:创建与mysql连接
	require('init.php');
	// 2:发送sql给mysql服务器
	// $sql="SET NAMES GBK";
	// $sql="INSERT INTO t_msg VALUES(null,'$uname','$phone',now(),'$content')";
	$sql="UPDATE t_msg SET phone=$phone,content='$content',pubtime=now() WHERE mid=$mid;";
	$result=mysqli_query($conn,$sql);
	// 3:获取返回结果判断
	if($result===true) echo '成功修改！'.mysqli_affected_rows($conn);
	else echo '修改失败！';

	// 127.0.0.1/msg_add_del/msg_update.php?uname=&phone=17602192844&content=美丽的大草原&mid=10
?>	

<a href="http://127.0.0.1/msg_add_del/msg_select.php">返回</a>