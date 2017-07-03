<?php
if((($_FILES["file"]["type"]=="image/gif")||($_FILES["file"]["type"]=="image/jpeg")||($_FILES["file"]["type"]=="image/pjpeg"))&&($_FILES["file"]["size"]<20000)){
  if($_FILES["file"]["error"]>0){
    	echo "Return Code: ".$_FILES["file"]["error"]."<br/>";
  }else{
  	  echo "Upload: ".$_FILES["file"]["name"]."<br/>";
  	  echo "Type: ".$_FILES["file"]["type"]."<br/>";
  	  echo "Size: ".($_FILES["file"]["size"]/1024)."Kb<br/>";
  	  echo "Temp file: ".$_FILES["file"]["tmp_name"]."<br/>";

      if(file_exists("img/".$_FILES["file"]["name"])){
      	echo $_FILES["file"]["name"]." already exists.";
      }else{
  	    move_uploaded_file($_FILES["file"]["tmp_name"],"img/".$_FILES["file"]["name"]);
        // move_uploaded_file($_FILES["file"]["tmp_name"],"upload/".time().$type);
  	    echo "Stored in: img/".$_FILES["file"]["name"];
        // echo "Stored in: "."upload/".time().$type;
      }
  }
}else{
  echo "Invalid file";
}
?>

<?php
	
	header('Content-Type: text/html;charset=utf-8'); 

	
	@$cname=$_REQUEST['cname'] or die('汽车名是必须的');
	// $pic=$_REQUEST['pic'];
	@$pic='img/'.$_FILES['file']['name'] or die('图片是必须的');
	@$price=$_REQUEST['price'] or die('价格是必须的');
	@$type=$_REQUEST['type'] or die('类型是必须的');
	// $file=$_REQUEST['file'];
	// 1:创建与mysql连接
	require("init.php");
	// 2:发送sql给mysql服务器
	// $sql="SET NAMES GBK";
	$sql="INSERT INTO car VALUES(null,'$cname','$pic',$price,now(),'$type')";
	$result=mysqli_query($conn,$sql);
	// 3:获取返回结果判断
	if($result===true) echo '成功添加'.mysqli_affected_rows($conn).'条记录';
	else echo '添加失败！';

	// 检测
	// 127.0.0.1/hui_mai_che/car_add.php?cname=hi&pic=img/2.jpg&price=200000&type=suv

?>

<a href="http://127.0.0.1/hui_mai_che/car_add.html">返回</a>