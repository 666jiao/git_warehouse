<?php
header("Content-Type:application/json");

$stuName=$_REQUEST['name'];
$myStu[]=["name"=>$stuName,"age"=>20,"score"=>100];
echo json_encode($myStu);
