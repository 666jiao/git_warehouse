<?php

  @$uname = $_REQUEST['uname']or die('用户名是必须的');
  @$upwd = $_REQUEST['upwd']or die('密码是必须的');
  //2:创建数据库连接
  //3:设置编码
  // require("init.php");
  $conn=mysqli_connect('127.0.0.1','root','','sohu');
  mysqli_query($conn,'SET NAMES UTF8');
  //4:创建SQL语句，发送SQL??
  $sql = "SELECT * FROM user WHERE uname='$uname' AND upwd='$upwd'";
  //5:抓取一条记录
  $result = mysqli_query($conn,$sql);
  $row = mysqli_fetch_assoc($result);
  //6:判断是否登录成功
  if($row===null){
    echo "login-err";
  }else{
    echo "login-succ";
  }

  // 127.0.0.1/homework_sohu/login.php?uname=晓红&upwd=123456

?>