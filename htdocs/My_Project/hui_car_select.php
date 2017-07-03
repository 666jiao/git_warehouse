<a href="http://127.0.0.1/My_project/hui_car_add.html">添加汽车信息</a><hr>

<?php

	header('Content-Type:text/html;charset=utf-8'); 
	require('init.php');
	// 2:发送sql给mysql服务器
	$sql='SELECT * FROM car';
	$result=mysqli_query($conn,$sql);
	$rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
	// $row = mysqli_fetch_assoc($result);  //抓取一行关联数组 
	// $row = mysqli_fetch_row($result);  //抓取一行索引数组
	// var_dump($rows);
?>

<table border='1' width='100%' style='border-collapse:collapse;text-align:center;'>
	<thead>
		<tr style="line-height:50px; background:#0f0;">
			<th>编号</th>
			<th>车名</th>
			<th>图片</th>
			<th>价格</th>
			<th>发布时间</th>
			<th>车型</th>
			<th>操作</th>
		</tr>
	</thead>
	<tbody id='tb1'>
		<?php
			foreach($rows as $k=>$v){
				echo "<tr>
						<td>$v[cid]</td>
						<td>$v[cname]</td>
						<td><img src='$v[pic]' alt='' width='80'></td>
						<td>$v[price]</td>
						<td>$v[pubtime]</td>
						<td>$v[type]</td>
						<td>
							<a class='btn-del' href='$v[cid]'>删除</a>
						</td>
					</tr>";
			}
		?>
	</tbody>
</table>


<script>
	tb1.onclick = function(e){
   	   var target = e.target;
	   if(target.className==='btn-del'){
		    e.preventDefault();
		    console.log(target);
		    var cid=target.getAttribute("href");
		    // var id=target.dataset.toggle;
		    var rs=window.confirm('删除吗？');
		    if(rs){
		    	location.href='hui_car_del.php?cid='+cid;
		    }
	   }
  	}
</script>