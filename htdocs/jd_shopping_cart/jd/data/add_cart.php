<?php
	header("Content-type:application/json;charset=utf-8");
	@$uid = $_REQUEST['uid']or die('{"code":-2,"msg":"用户是必须的"}');
	@$pid = $_REQUEST['pid']or die('{"code":-2,"msg":"商品是必须的"}');

	$conn=mysqli_connect('127.0.0.1','root','','jd');
	mysqli_query($conn,'SET NAMES UTF8');
	$sql="SELECT * FROM jd_cart WHERE pid=$pid AND uid=$uid";
	$result=mysqli_query($conn,$sql);
	$row = mysqli_fetch_assoc($result);
	$count=1;
	if($row===null){
		$sql="INSERT INTO jd_cart VALUES(null,$pid,1,$uid)";
		$result=mysqli_query($conn,$sql);
	}else{
		$sql="UPDATE jd_cart SET count=count+1 WHERE pid=$pid AND uid=$uid";
	    $result=mysqli_query($conn,$sql);
	    $count=$row['count']+1;
	}
	
	$output=["code"=>1,"msg"=>"添加成功","count"=>$count];
	echo json_encode($output);

?>



