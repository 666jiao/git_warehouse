<?php

	@$uname=$_REQUEST['uname'] or die('用户名是必须的');
	@$upwd=$_REQUEST['upwd'] or die('密码是必须的');
	// 1:创建与mysql连接
	require("init.php");


	$sql = "SELECT * FROM user WHERE uname='$uname'";
 	$result = mysqli_query($conn,$sql);
  	$row = mysqli_fetch_assoc($result);
  	if($row===null){
		// $sqls="INSERT INTO user VALUES(null,'$uname','$upwd')";
		// $results=mysqli_query($conn,$sqls);
		// // 3:获取返回结果判断
		// if($results===true) echo '成功注册'.mysqli_affected_rows($conn).'条记录';
		// else echo '注册失败！';
		
		$sql="INSERT INTO user VALUES(null,'$uname','$upwd')";
		$result=mysqli_query($conn,$sql);
		// 3:获取返回结果判断
		if($result===true) echo '成功添加'.mysqli_affected_rows($conn).'条记录';
		else echo '添加失败！';
		// echo "数据不存在";
	}else{
		echo "注册失败";
	}


	// $sql="INSERT INTO user VALUES(null,'$uname','$upwd')";
	// $result=mysqli_query($conn,$sql);
	// // 3:获取返回结果判断
	// if($result===true) echo '成功添加'.mysqli_affected_rows($conn).'条记录';
	// else echo '添加失败！';

	// 检测
	// 127.0.0.1/ajax_add/add_user.php?uname=晓红&upwd=123456

?>