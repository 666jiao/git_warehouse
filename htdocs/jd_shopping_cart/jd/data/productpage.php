<?php
	
	header("Content-type:application/json;charset=utf-8");
	$conn=mysqli_connect('127.0.0.1','root','','jd');
	mysqli_query($conn,'SET NAMES UTF8');
	$sql="SELECT count(*) FROM jd_product";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_row($result);
	$num=ceil(intval($row[0])/8);
	$output=["page"=>$num];
	echo json_encode($output);

?>