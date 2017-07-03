<?php
	
	header('Content-Type:application/json;charset=utf-8');
	@$uname=$_REQUEST['uname']or die('{"code":-1,"msg":"用户名是必须的"}');

	$conn=mysqli_connect('127.0.0.1','root','','huimaiche');
	mysqli_query($conn,'SET NAMES UTF8');
	$sql = "SELECT * FROM user WHERE uname='$uname'";
 	$result = mysqli_query($conn,$sql);
  	$row = mysqli_fetch_assoc($result);
  	if($row===null){
		echo json_encode(["code"=>1,"msg"=>"用户名可以使用"]);
	}else{
		echo '{"code":-1,"msg":"用户名已存在"}';
	}

	// 127.0.0.1/ajax_name/existsuname.php?uname=晓红&upwd=123
?>