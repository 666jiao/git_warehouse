<?php 
echo 'var reqUrl = "'.$_SERVER["REQUEST_URI"].'";'; 
echo $_GET["callback"].'({"reqUrl": reqUrl });';
