



<form id="form1" name="form1" method="post" action="yanzhneg.php">
    <input type="text" name="uname" id="uname" value="<?=$CKUNAME;?>" /> 
    <input type="password" name="pwd" id="pwd" value="<?=$CKPWD;?>" /> 
    <input name="remember" type="checkbox" value="1" <? if($CKUNAME!=''){ checked="checked"  } ?> />记住我! 
    <input type="submit" name="button" id="button" value="登录" />
</form>