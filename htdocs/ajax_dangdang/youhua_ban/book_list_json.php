<?php

header('Content-Type:application/json;charset=utf-8'); 
$conn=mysqli_connect('127.0.0.1','root','','dangdang');
mysqli_query($conn,'SET NAMES UTF8');
$sql='SELECT * FROM dd_book';
$result=mysqli_query($conn,$sql);
$rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($rows);