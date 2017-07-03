<?php 
header("Content-Type:application/javascript;charset=utf-8");
echo 'var reqUrl = "'.$_SERVER["REQUEST_URI"].'";'; 
echo 'var method = "'.$_SERVER["REQUEST_METHOD"].'";'; 
echo 'var host = "'.$_SERVER["HTTP_HOST"].'";'; 
echo 'var nam = "'.$_SERVER["SERVER_NAME"].'";'; 
echo 'var set = "'.$_SERVER["HTTP_ACCEPT_LANGUAGE"].'";'; 
// echo 'var coo = "'.$_SERVER["HTTP_COOKIE"].'";';
echo 'var uag = "'.$_SERVER["HTTP_USER_AGENT"].'";';
echo 'var cal = "'.$_SERVER["HTTP_ACCEPT"].'";';
echo 'var enc = "'.$_SERVER["HTTP_ACCEPT_ENCODING"].'";';
echo 'var cti = "'.$_SERVER["HTTP_CONNECTION"].'";';
echo 'var svr = "'.$_SERVER["REMOTE_ADDR"].'";';
echo 'var svt = "'.$_SERVER["SERVER_PORT"].'";';
echo 'var sit = "'.$_SERVER["SCRIPT_FILENAME"].'";';
echo 'var sie = "'.$_SERVER["SCRIPT_NAME"].'";';
echo 'var pse = "'.$_SERVER["PHP_SELF"].'";';
echo 'var sep = "'.$_SERVER["SERVER_PROTOCOL"].'";';
echo 'var qus = "'.$_SERVER["QUERY_STRING"].'";';
echo 'var hac = "'.$_SERVER["SERVER_ADMIN"].'";';
echo 'var ret = "'.$_SERVER["REQUEST_TIME"].'";';
echo 'var ref = "'.$_SERVER["HTTP_REFERER"].'";';
echo 'var s="美丽的大操元";';
$q=$_GET["callback"].'({"reqUrl": reqUrl,"method": method,
						  "host": host,"nam": nam,
						  "set": set,/*"coo": coo,*/"uag": uag,
						  "cal": cal,"enc": enc,"cti": cti,
						  "svr": svr,"svt": svt,"sit": sit,
						  "sie": sie,"pse": pse,"sep": sep,
						  "qus": qus,"hac": hac,"ret": ret,
						  "ref": ref,"s": s/*"con": con,"pra": pra*/
						  });';
// echo 'var con = "'.$_SERVER["HTTP_CACHE_CONTROL"].'";';
// echo 'var pra = "'.$_SERVER["HTTP_PRAGMA"].'";';
echo $q;


// echo $_GET["callback"].'({"ename0":"tom0","ename1":"tom1","ename2":"tom2","ename3":"tom3","ename4":"tom4",})';