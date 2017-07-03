<?php

@$bname=$_REQUEST['bname']or die('-2');
@$pic=$_REQUEST['pic']or die('-3');
@$price=$_REQUEST['price']or die('-4');
@$pubdate=$_REQUEST['pubdate']or die('-5');
$conn=mysqli_connect('127.0.0.1','root','','dangdang');
mysqli_query($conn,'SET NAMES UTF8');
$sql="INSERT INTO dd_book VALUES(null,'$bname','$pic',$price,'$pubdate')";
$result=mysqli_query($conn,$sql);
if($result===true) echo mysqli_insert_id($conn);
else echo '-2'; 

// 127.0.0.1/ajax_dangdang/add_book.php?bname=未亡人&pic=images/f8.png&price=26.24&pubdate=2016-05-23
?>