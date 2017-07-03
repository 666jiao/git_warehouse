<?php

	@$uname=$name=$_REQUEST['uname']or die('用户名是必须的');
	// @$upwd=$name=$_REQUEST['upwd']or die('密码是必须的');
	// require('init.php');

	$conn=mysqli_connect('127.0.0.1','root','','huimaiche');
	mysqli_query($conn,'SET NAMES UTF8');
	$sql = "SELECT * FROM user WHERE uname='$uname'";
 	$result = mysqli_query($conn,$sql);
  	$row = mysqli_fetch_assoc($result);
  	if($row===null){
		// $sqls="INSERT INTO user VALUES(null,'$uname','$upwd')";
		// $results=mysqli_query($conn,$sqls);
		// // 3:获取返回结果判断
		// if($results===true) echo '成功注册'.mysqli_affected_rows($conn).'条记录';
		// else echo '注册失败！';
		echo "用户名可以使用";
	}else{
		echo '用户名已存在';
	}

	// 127.0.0.1/ajax_name/existsuname.php?uname=晓红&upwd=123
?>