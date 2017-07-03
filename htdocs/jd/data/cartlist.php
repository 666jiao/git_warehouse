<?php

	header("Content-type:application/json;charset=utf-8");
	@$uid = $_REQUEST['uid']or die('{"code":-2,"msg":"用户是必须的"}');
	$conn=mysqli_connect('127.0.0.1','root','','jd');
	mysqli_query($conn,'SET NAMES UTF8');
	// $sql="SELECT * FROM jd_cart WHERE uid=$uid";
	$sql="SELECT c.cid,p.pname,p.price,c.count,p.pic FROM jd_cart c,jd_product p";
	$sql .=" WHERE c.pid=p.pid AND c.uid=$uid";
	$result=mysqli_query($conn,$sql);
	$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
	echo json_encode($rows);
?>