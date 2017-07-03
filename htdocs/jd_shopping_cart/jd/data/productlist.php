<?php

	header("Content-type:application/json;charset=utf-8");
	// @$prve = $_REQUEST['prve']or die('{"code":-2,"msg":"用户名不能为空"}');
	@$pno = $_REQUEST['pno']or die('{"code":-2,"msg":"页码是必须的"}');
		$pno=($pno-1)*8;
	// if($num==1){$num=0;};
	$conn=mysqli_connect('127.0.0.1','root','','jd');
	mysqli_query($conn,'SET NAMES UTF8');
	$sql="SELECT * FROM jd_product LIMIT $pno,8";
	$result=mysqli_query($conn,$sql);
	$rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
	echo json_encode($rows);
?>


