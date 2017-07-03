<?php
@$bid=$_REQUEST['bid'] or die("-2");
$conn=mysqli_connect('127.0.0.1','root','','dangdang');
mysqli_query($conn,'SET NAMES UTF8');
$sql="DELETE FROM dd_book WHERE bid=$bid";
$result=mysqli_query($conn,$sql);
if($result===true) echo '1';
else echo '-1';