<?php

	header('Content-Type:application/json;charset=utf-8');
	@$uname=$_REQUEST['uname'] or die('{"msg":"用户名是必须的"}');
	@$upwd=$_REQUEST['upwd'] or die('{"msg":"密码是必须的"}');

	$conn=mysqli_connect('127.0.0.1','root','','huimaiche');
	mysqli_query($conn,'SET NAMES UTF8');
	$sql="SELECT * FROM user WHERE uname='$uname'";
 	$result = mysqli_query($conn,$sql);
  	$row = mysqli_fetch_assoc($result);
  	if($row===null){
		$sql="INSERT INTO user VALUES(null,'$uname','$upwd')";
		$result=mysqli_query($conn,$sql);
		if($result===true){
			$s='成功添加'.mysqli_affected_rows($conn).'条记录';
			echo '{"msg":$s}';
		}else echo '{"msg":"添加失败！"}';
	}else echo '{"msg":"注册失败"}';

	// 检测
	// 127.0.0.1/ajax_add/add_user.php?uname=晓红&upwd=123456

?>