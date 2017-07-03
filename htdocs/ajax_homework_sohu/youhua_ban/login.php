<?php

  @$uname = $_REQUEST['uname']or die('用户名是必须的');
  @$upwd = $_REQUEST['upwd']or die('密码是必须的');
  $conn=mysqli_connect('127.0.0.1','root','','sohu');
  mysqli_query($conn,'SET NAMES UTF8');
  $sql = "SELECT * FROM user WHERE uname='$uname' AND upwd='$upwd'";
  $result = mysqli_query($conn,$sql);
  $row = mysqli_fetch_assoc($result);
  if($row===null) echo "login-err";
  else echo "login-succ";

  // 127.0.0.1/homework_sohu/login.php?uname=晓红&upwd=123456

?>