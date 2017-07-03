<?php
  //功能:完成用户登录
  //1:获取用户参数 uname upwd
  @$uname = $_REQUEST['uname']or die('用户名是必须的');
  @$upwd = $_REQUEST['upwd']or die('密码是必须的');
  //2:创建数据库连接
  //3:设置编码
  require("init.php");
  //4:创建SQL语句，发送SQL??
  $sql = "SELECT * FROM user WHERE uname='$uname' AND upwd='$upwd'";
  //5:抓取一条记录
  $result = mysqli_query($conn,$sql);
  $row = mysqli_fetch_assoc($result);
  //6:判断是否登录成功
  if($row===null){
    echo "登录失败<a href='http://127.0.0.1/My_project/hui_login.html'>返回</a>";
  }else{
    echo "登录成功<a href='http://127.0.0.1/My_project/hui_car_select.php'>查看汽车信息</a>";
  }


  // http://127.0.0.1/My_project/hui_login.php?uname=csyz77&upwd=123456
?>

