<?php
//读取COOKIE的用户名和密码的值即可
if($_COOKIE['uname']!=''){$CKUNAME =  $_COOKIE['uname'];}
if($_COOKIE['pwd']!=''){$CKPWD =  $_COOKIE['pwd'];}
echo $CKUNAME;
echo '<br>';
echo $CKPWD;
?>


<?php
//登录，将用户名和密码存入到COOKIE
if($_POST['button']!=''){
    $uname = $_POST['uname'];
    $pwd = $_POST['pwd'];
    //如果输入的加密密码和COOKIE中不一样，那么就加密
    if($pwd!=$CKPWD){$pwd = md5($pwd);}
    $remember = $_POST['remember'];
    if($remember==1){
       setcookie("uname", $uname, time()+3600*24*30);
       setcookie("pwd", $pwd, time()+3600*24*30);
    }
}
?>