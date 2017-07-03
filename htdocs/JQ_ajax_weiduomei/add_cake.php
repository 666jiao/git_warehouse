<?php
	
	header('Content-Type:application/json;charset=utf-8');
	@$name=$_REQUEST['name'] or die('{"code":-2,"msg":"名字是必须的"}');
	@$price=$_REQUEST['price'] or die('{"code":-4,"msg":"价格是必须的"}');
	@$pic=$_REQUEST['pic'] or die('{"code":-3,"msg":"图片是必须的"}');
	@$cid=$_REQUEST['cid'] or die('{"code":-5,"msg":"编号是必须的"}');

	$conn=mysqli_connect('127.0.0.1','root','','weiduomei');
	mysqli_query($conn,'SET NAMES UTF8');
	$sql="INSERT INTO dm_cake VALUES(null,'$name',$price,'$pic',$cid)";
	$result=mysqli_query($conn,$sql);

	if($result===true) echo '{"code":1,"msg":"成功添加！"}';
	else echo '{"code":-1,"msg":"添加失败！"}';
	// .mysqli_affected_rows($conn).'条记录'
	// 
	//127.0.0.1/JQ_ajax_weiduomei/add_cake.php?name=hi&pic=2.jpg&price=200000&cid=2
?>