<?php 
  //0:修改响应主体内容 js
  header("Content-Type:application/javascript;charset=utf-8");
  //?1:获取所有用户请求头部信息
  $all=getallheaders();
  //?2:获取其中-首选语言
  $lang=$all['Accept-Language'];
  //?3:截取前二个字母
  $start2=substr($lang,0,2);
  if($start2==='zh') echo 'var msg="你好";alert(msg)';
  else if($start2==='en') echo 'var msg="hello";alert(msg)';
  else echo 'var msg="hello";alert(msg)';