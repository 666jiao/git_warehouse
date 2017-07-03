<?php

	header("Content-type:application/json;charset=utf-8");
	@$cid=$_REQUEST['cid'] or die('{"code":-2,"msg":"用户是必须的"}');
	@$num=$_REQUEST['num'] or die('{"code":-3,"msg":"22是必须的"}');
	$conn=mysqli_connect('127.0.0.1','root','','jd');
	mysqli_query($conn,'SET NAMES UTF8');

	// if(($num-2)>0){}
		$sql="UPDATE jd_cart SET count=$num WHERE cid=$cid";
		$result=mysqli_query($conn,$sql);

		if($result===true) echo '{"code":1,"msg":"更新成功"}';
		else echo '{"code":-1,"msg":"更新失败"}';
	
	

?>