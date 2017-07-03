<?php

	@$uname=$_REQUEST['uname']or die('用户名是必须的');
	@$phone=$_REQUEST['phone']or die('电话是必须的');
	@$content=$_REQUEST['content']or die('内容是必须的');
	// 1:创建与mysql连接
	require('init.php');
	// 2:发送sql给mysql服务器
	// $sql="SET NAMES GBK";
	$sql="INSERT INTO t_msg VALUES(null,'$uname',$phone,now(),'$content')";
	$result=mysqli_query($conn,$sql);
	// 3:获取返回结果判断
	if($result===true) echo '成功添加'.mysqli_affected_rows($conn).'条记录';
	else echo '添加失败！';

	// 检测
	// 127.0.0.1/msg_add_del/msg_add.php?uname=hi&phone=17602192844&content=美丽的大草原
?>

<a href="http://127.0.0.1/msg_add_del/msg_add.html">返回</a>