<?php

	session_start();

	if(isset($_SESSION['views'])) $_SESSION['views']=$_SESSION['views']+1;
	else $_SESSION['views']=1;
	echo "Views=".$_SESSION['views'].'<br>';
	// unset($_SESSION['views']);
	// session_destroy();

	header('Content-Type: text/html;charset=utf-8');
	
	// echo readfile("webdictionary.txt");

	// $myfile=fopen("webdictionary.txt", "r")or die("Unable to open file!"); //打开操作
	// // echo fread($myfile,filesize("webdictionary.txt")); //读取所有
	// // echo fgets($myfile); //读取单行
	// // echo fgetc($myfile);  //读取单个字节
	// // feof($myfile); //检查文件是否达到最后一行 达到则返回1
	// while(!feof($myfile)){                         //读取操作
	//   echo fgets($myfile)."<br>".feof($myfile);
	// }

	// // while(!feof($myfile)){
	// //   echo fgetc($myfile).feof($myfile);
	// // }
	// fclose($myfile);  //关闭操作
	





  	
	// $myfile = fopen("newfile.txt", "w") or die("Unable to open file!"); //创建一个文本文档
	// $txt = "Bill Gates\nSteve Jobs\nSteve Jobs";  //编写内容
	// fwrite($myfile, $txt);  //写入到文本文档
	// // $txt = "Steve Jobs\n";
	// // fwrite($myfile, $txt);
	// fclose($myfile);

	$uname='Alex Porter';
	setcookie("user", $uname, time()+3600);
	
	echo $_COOKIE['user'].'<br>';

	//print_r($_COOKIE);

	if(isset($_COOKIE["user"])) echo "Welcome $_COOKIE[user]!<br/>";
	else echo "Welcome guest!<br/>";


	echo (time()/3600).'<br>';
	echo "今天是 " . date("Y/m/d/l") . "<br>";
	echo "今天是 " . date("Y.m.d.l") . "<br>";
	echo "今天是 " . date("Y-m-d-l") . "<br>";
	echo "今天是 " . date("l"). date("Y"). date("m"). date("d"). "<br>";
	echo '© 2010-' . date("Y");

	// $to = "289212678@qq.com";
	// $subject = "Test mail";
	// $message = "Hello! This is a simple email message.";
	// $from = "someonelse@example.com";
	// $headers = "From: $from";
	// mail($to,$subject,$message,$headers);
	// echo "Mail Sent.";

?>

<form action="welcome.php" method="post">
	Name: <input type="text" name="name"/>
	  Age: <input type="text" name="age"/>
	          <input type="submit"/>
</form>