<?php
  header("Content-type:application/json;charset=utf-8");
  @$uname = $_REQUEST['uname']or die('{"code":-2,"msg":"用户名不能为空"}');
  @$upwd = $_REQUEST['upwd']or die('{"code":-3,"msg":"密码不能为空"}');
  //2:创建数据库连接
  //3:设置编码
  $conn=mysqli_connect('127.0.0.1','root','','jd');
  mysqli_query($conn,'SET NAMES UTF8');
  //4:创建SQL语句，发送SQL??
  // $sql = "SELECT uid FROM jd_user WHERE uname='$uname' AND upwd='$upwd'";
  //5:抓取一条记录
  $result = mysqli_query($conn,"SELECT uid FROM jd_user WHERE uname='$uname' AND upwd='$upwd'");
  $row = mysqli_fetch_assoc($result);
  //6:判断是否登录成功
  if($row===null){
    echo '{"code":-1,"msg":"用户名或密码错误"}';
  }else{
 	// $input = json_encode($row);
	// echo "登录成功".$input;
	// 
  	// $uid=$row['uid'];
    setcookie('username',$uname,time()+3600);
    if(isset($_COOKIE["username"])){   //使用isset()函数检测cookie变量是否已经被设置
        // echo "您好！".$_COOKIE["username"];
        $coo=$_COOKIE["username"];
        $output=["code"=>1,"msg"=>"登陆成功","uname"=>$coo,"uid"=>$row['uid']];
        echo json_encode($output);
    }
  }

	// $row = ["eid"=>1,"ename"=>"tom"];
	// $input = json_encode($row);
	// echo $input;
?>