<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>

<div>我的php</div>
<script>
	var obj={name:"mary",age:20,id:"中国",count:34};
	for(var key in obj) console.log(key,obj[key]);
</script>
<?php
// phpinfo();
	$xin="*";
	echo $xin.'<br>';

	for($i=0;$i<100;$i++) echo "*";

	echo "<hr>";

	for($i=0;$i<5;$i++){
		for($j=0;$j<10;$j++) echo "*";
		echo "<br>";
	}

	for($i=1;$i<10;$i++){
		for($j=1;$j<=$i;$j++) echo $j.'x'.$i.'='.$i*$j.'&nbsp';
		echo "<br>";
	}

	echo "<hr>";

	$ename='tom';
	$age=20;
	echo "姓名：$ename 年龄：$age <br>";
	echo '姓名：'.$ename.' '.'年龄：'.$age;

	echo "<hr>";

	$str='10.50';
	var_dump($str);
	$str=10.50;
	var_dump($str);

	echo "<hr>";
	$arr1 = array(10,20,50,100,23.45);
	$arr2 = [10,20,50,100,23.45];
	$arr1[5]='ewfwe';
	$arr1[]='223344';
	var_dump($arr1);
	echo count($arr1);

	echo "<hr>";
	$arr3=['id'=>1,'name'=>'tom','age'=>20];
	$arr3['ks']=40;
	var_dump($arr3);

	echo "<hr>";
	foreach($arr3 as $key => $value) echo $key.' : '.$value.'&nbsp&nbsp&nbsp&nbsp';

	echo "<hr>";
	for($i=0;$i<count($arr1);$i++) echo $arr1[$i].'&nbsp';

	echo "<hr>";
	$list=[];
	$list[]=['id'=>1,"name"=>'js大全'];
	$list[]=['id'=>2,"name"=>'css大全'];
	$list[]=['id'=>3,"name"=>'php大全'];
	var_dump($list);
	echo "<hr>";
	// foreach ($list as $key => $value){
	// 	echo $value['id'].' : '.$value['name'].'&nbsp&nbsp&nbsp&nbsp';
	// }
	
	
	foreach($list as $k => $v){
		foreach($v as $key => $value){
			// echo $key.' : '.$value.'&nbsp&nbsp&nbsp&nbsp';
			echo "$key : $value &nbsp&nbsp&nbsp&nbsp";
		}
	}

	echo "<hr>";
	echo "<table border='1' width='80%' style='border-collapse:collapse;'>";
	echo "<tr><td>图书编号</td><td>图书名称</td></tr>";
	foreach($list as $key => $value){
		// echo '<tr><td>'.$value['id'].'</td><td>'.$value['name'].'</td><tr>';
		echo "<tr>
				<td>$value[id]</td>
				<td>$value[name]</td>
			<tr>";
	}
	echo "</table>";
?>
</body>
</html>