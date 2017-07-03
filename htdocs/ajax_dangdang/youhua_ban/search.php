<?php

	header('Content-Type:text/html;charset=utf-8'); 
	@$kw=$_REQUEST['kw']or die('<li>关键字不存在</li>');


	$conn=mysqli_connect('127.0.0.1','root','','dangdang');
	mysqli_query($conn,'SET NAMES UTF8');
	
	$sql="SELECT * FROM dd_book WHERE bname LIKE '%$kw%'";
	$result=mysqli_query($conn,$sql);
	$rows=mysqli_fetch_all($result,MYSQLI_ASSOC);


	if($rows===null){
		echo '<li>没有匹配的记录</li>';
	}else{
		foreach($rows as $k=>$v){
			echo "<li>$v[bid]$v[bname]$v[pic]$v[price]$v[pubdate]</li>";
				// echo "	<li>$v[bid]</li>
				// 	  	<li>$v[bname]</li>
				// 		<li>$v[pic]</li>
				// 		<li>$v[price]</li>
				// 		<li>$v[pubdate]</li>";
		}
	}
	
?>