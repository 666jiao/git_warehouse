<?php
	echo '<h1>Hello World!</h1>';

	// $x = 30;
	// $y = 65; 

	// function addition(){
	//    $GLOBALS['z'] = $GLOBALS['x'] + $GLOBALS['y'];
	// }
	// addition();
	// echo $z;

	// $conn=mysqli_connect($host,$uname,$upwd,$dbname,$port);
	// $sql="";
	// mysqli_query($conn, $sql);

	// mysqli_affected_rows($conn);
	// mysqli_fetch_array($result);
	
	// // 1:创建与mysql连接
	// $conn=mysqli_connect('127.0.0.1','root','','dongdong');
	// // 2:发送sql给mysql服务器
	// $sql = "INSERT INTO product_type VALUES(5,'西厢记',12)";
	// $result = mysqli_query($conn,$sql);
	// // 3:获取返回结果判断
	// if($result===true){
	// 	echo '成功添加！';
	// }else{
	// 	echo '添加失败！';
	// }
	// 
	// 
	
	// $list=[];
	// $list[]=['id'=>1,"name"=>'js大全'];
	// $list[]=['id'=>2,"name"=>'css大全'];
	// $list[]=['id'=>3,"name"=>'php大全'];

	$list=[
		['id'=>1,"name"=>'js大全'],
		['id'=>2,"name"=>'css大全'],
		['id'=>3,"name"=>'php大全'],
	];


	echo "<table border='1' width='80%' style='border-collapse:collapse;'>";
	// echo "<tr><td>图书编号</td><td>图书名称</td></tr>";
	foreach($list as $key => $value){
		// echo '<tr><td>'.$value['id'].'</td><td>'.$value['name'].'</td><tr>';
		// echo "<tr>
		// 		<td>$value[id]</td>
		// 		<td>$value[name]</td>
		// 	<tr>";
		// 	
		echo "$value[id]:$value[name]";
	}

	// for($i=0;$i<count($arr1);$i++){}
	echo "</table>";
