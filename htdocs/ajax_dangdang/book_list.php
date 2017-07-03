<?php

	header('Content-Type:text/html;charset=utf-8'); 
	$conn=mysqli_connect('127.0.0.1','root','','dangdang');
	mysqli_query($conn,'SET NAMES UTF8');
	// 2:发送sql给mysql服务器
	$sql='SELECT * FROM dd_book';
	$result=mysqli_query($conn,$sql);
	$rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
	// $row = mysqli_fetch_assoc($result);  //抓取一行关联数组 
	// $row = mysqli_fetch_row($result);  //抓取一行索引数组
	// var_dump($rows);
	foreach($rows as $k=>$v){
		echo "<tr>
				<td>$v[bid]</td>
				<td>$v[bname]</td>
				<td>$v[pic]</td>
				<td>$v[price]</td>
				<td>$v[pubdate]</td>
				<td>
					<a href='$v[bid]' class='btn-del'>删除</a>
				</td>
			</tr>";
	}
?>

