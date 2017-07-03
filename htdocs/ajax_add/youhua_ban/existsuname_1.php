<?php

	header('Content-Type:application/json;charset=utf-8');
	@$upwd=$_REQUEST['upwd']or die('{"msg":"密码是必须的"}');

	// 127.0.0.1/ajax_name/existsuname.php?uname=晓红&upwd=123
?>