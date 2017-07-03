<?php
 // $name=$_REQUEST['name'];
 // $tcount=$_REQUEST['tcount'];
  
 
 	// 1:创建与mysql连接
	// $conn=mysqli_connect('127.0.0.1','root','','dongdong');
	// // 2:发送sql给mysql服务器
	// $sql='SELECT * FROM product';
	// $result=mysqli_query($conn,$sql);
	// // 3:获取返回结果判断
	// if($result){
	// 	echo '共'.mysqli_num_rows($result).'条记录';
	// }else{
	// 	echo '添加失败！';
	// }
	
	header('Content-Type: text/html;charset=utf-8');  
	 
	
	$conn=mysqli_connect('127.0.0.1','root','','dongdong');
	mysqli_query($conn,'SET NAMES UTF8');
	// 2:发送sql给mysql服务器
	$sql='SELECT * FROM product';
	$result=mysqli_query($conn,$sql);
	// 

	// $rows=mysqli_fetch_assoc($result);
	// var_dump($rows);
	// echo "<br>";
	// $rows=mysqli_fetch_row($result);
	// var_dump($rows);
	// echo "<br>";
	$rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
	// var_dump($rows);
	// echo "<br>";
	
	echo "<table border='1' width='100%' style='border-collapse:collapse;'>";
	echo "<thead>";
	echo "<tr><th>id</th><th>name</th><th>piace</th><th>photo</th><th>time</th><th>num</th><th>操作</th></tr>";
	echo "</thead>";
	echo "<tbody id='tb1'>";
	foreach($rows as $k=>$v){
		echo "<tr>
				<td>$v[id]</td>
				<td>$v[name]</td>
				<td>$v[piace]</td>
				<td>$v[photo]</td>
				<td>$v[time]</td>
				<td>$v[num]</td>
				<td>
					<a class='btn-del' href='$v[id]'>删除</a>
					<a class='btn-update' href='$v[id]'>更新价格</a>
				</td>
			</tr>";
	}
	echo "</tbody>";
	echo "</table>";


	// $row=mysqli_fetch_array($result);
	// var_dump($row);
	// 3:获取返回结果判断
	// if($result){
	// 	while($row=mysqli_fetch_array($result)){
	// 		echo $row['id'].' , '.$row['name'].' , '.$row['piace'].' , '.$row['photo'].' , '.$row['time'].' , '.$row['num'].'<br>';
	// 	}
	// }else{
	// 	echo '添加失败！';
	// }

?>

<script>
  //1(js):获取所删除按钮
  var tb1 = document.getElementById("tb1");
  tb1.onclick = function(e){
   var target = e.target;
	   if(target.className==='btn-del'){
		    e.preventDefault();
		    console.log(target);
		    var id=target.getAttribute("href");
		    var rs=window.confirm('删除吗？');
		    if(rs){
		    	location.href='product_del.php?id='+id;
		    }
	   }else if(target.className==='btn-update'){
	   		e.preventDefault();
		    console.log(target);
		    var id=target.getAttribute("href");
		    var rs=window.confirm('更新吗？');
		    if(rs){
		    	location.href='product_update.php?id='+id;
		    }
	   }
  }
</script>


