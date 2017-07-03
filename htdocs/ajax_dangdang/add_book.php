<?php
// if((($_FILES["file"]["type"]=="image/png")||($_FILES["file"]["type"]=="image/gif")||($_FILES["file"]["type"]=="image/jpeg")||($_FILES["file"]["type"]=="image/pjpeg"))&&($_FILES["file"]["size"]<20000)){
// 	if($_FILES["file"]["error"]>0){
// 		echo "Return Code: ".$_FILES["file"]["error"]."<br/>";
// 	}else{
// 		echo "Upload: ".$_FILES["file"]["name"]."<br/>";
// 		echo "Type: ".$_FILES["file"]["type"]."<br/>";
// 		echo "Size: ".($_FILES["file"]["size"]/1024)."Kb<br/>";
// 		echo "Temp file: ".$_FILES["file"]["tmp_name"]."<br/>";

// 		if(file_exists("images/".$_FILES["file"]["name"])){
// 			echo $_FILES["file"]["name"]." already exists.";
// 		}else{
// 		    move_uploaded_file($_FILES["file"]["tmp_name"],"images/".$_FILES["file"]["name"]);
// 		    echo "Stored in: images/".$_FILES["file"]["name"];
// 		}
// 	}
// }else{
//   echo "Invalid file";
// }

@$bname=$_REQUEST['bname']or die('-2');
// @$pic='images/'.$_FILES["file"]["name"]or die('-3');
@$pic=$_REQUEST['pic']or die('-3');
@$price=$_REQUEST['price']or die('-4');
@$pubdate=$_REQUEST['pubdate']or die('-5');
// 1:创建与mysql连接
$conn=mysqli_connect('127.0.0.1','root','','dangdang');
mysqli_query($conn,'SET NAMES UTF8');
// 2:发送sql给mysql服务器
// $sql="SET NAMES GBK";
$sql="INSERT INTO dd_book VALUES(null,'$bname','$pic',$price,'$pubdate')";
$result=mysqli_query($conn,$sql);
// 3:获取返回结果判断
if($result===true){
	$id=mysqli_insert_id($conn);
	echo $id;
}else{
	echo '-2';
} 

// 127.0.0.1/ajax_dangdang/add_book.php?bname=未亡人&pic=images/f8.png&price=26.24&pubdate=2016-05-23
?>