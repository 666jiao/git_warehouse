<?php

//检查用户是否登录 
function checklogin(){  
 if(empty($_SESSION['user_info'])){    //检查一下session是不是为空  
    if(empty($_COOKIE['username']) || empty($_COOKIE['password'])){  //如果session为空，并且用户没有选择记录登录状  
     header("location:login.php?req_url=".$_SERVER['REQUEST_URI']);  //转到登录页面，记录请求的url，登录后跳转过去，用户体验好。  
 	}else{   //用户选择了记住登录状态  
     $user = getUserInfo($_COOKIE['username'],$_COOKIE['password']);   //去取用户的个人资料  
	    if(empty($user)){    //用户名密码不对没到取到信息，转到登录页面  
     		header("location:login.php?req_url=".$_SERVER['REQUEST_URI']);  
	    }else{  
     		$_SESSION['user_info'] = $user;   //用户名和密码对了，把用户的个人资料放到session里面  
	    }  
    }  
 }  
}




username = trim($_POST['username']);  
$password = md5(trim($_POST['password']));  
$validatecode = $_POST['validateCode'];  
$ref_url = $_GET['req_url'];  
$remember = $_POST['remember'];  
  
$err_msg = '';  
if($validatecode!=$_SESSION['checksum']){  
	$err_msg = "验证码不正确";  
}elseif($username=='' || $password==''){  
	$err_msg = "用户名和密码都不能为空";  
}else{  
	$row = getUserInfo($username,$password);  
  
	if(empty($row)){  
		$err_msg = "用户名和密码都不正确";  
	}else{  
		$_SESSION['user_info'] = $row;  
		if(!empty($remember)){     //如果用户选择了，记录登录状态就把用户名和加了密的密码放到cookie里面  
		setcookie("username", $username, time()+3600*24*365);  
		setcookie("password", $password, time()+3600*24*365);  
		}  
		if(strpos($ref_url,"login.php") === false){  
			header("location:".$ref_url);  
		}else{  
			header("location:main_user.php");  
		}  
	}  
}




//退出登录 
function logout(){  
	unset($_SESSION['user_info']);  
	if(!empty($_COOKIE['username']) || !empty($_COOKIE['password'])){  
		setcookie("username", null, time()-3600*24*365);  
		setcookie("password", null, time()-3600*24*365);  
	}  
}

?>