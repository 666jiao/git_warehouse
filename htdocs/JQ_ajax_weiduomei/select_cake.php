<?php
	header('Content-Type:application/json;charset=utf-8'); 
   	@$cid=$_REQUEST['cid']or die('{"code":-2,"msg":"编号是必须的"}');;


   	$conn=mysqli_connect('127.0.0.1','root','','weiduomei');
	mysqli_query($conn,'SET NAMES UTF8');
   	$sql="SELECT * FROM dm_cake WHERE cid=$cid";
	$result=mysqli_query($conn,$sql);
	$rows=mysqli_fetch_all($result,MYSQLI_ASSOC);

	$input=json_encode($rows);
	echo $input; 


?>