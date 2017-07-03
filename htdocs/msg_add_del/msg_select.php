<a href="http://127.0.0.1/msg_add_del/msg_add.html">添加记录</a>

<?php
	
	require('init.php');
	// 2:发送sql给mysql服务器
	$sql='SELECT content,mid,pubtime,uname,phone FROM t_msg';
	$result=mysqli_query($conn,$sql);
	$rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
	
	echo "<table border='1' width='100%' style='border-collapse:collapse;'>";
	echo "<thead>";
	echo "<tr><th>编号</th><th>发布人</th><th>手机号</th><th>留言内容</th><th>发布时间</th><th>操作</th></tr>";
	echo "</thead>";
	echo "<tbody id='tb1'>";
	foreach($rows as $k=>$v){
		echo "<tr>
				<td>$v[mid]</td>
				<td>$v[uname]</td>
				<td>$v[phone]</td>
				<td>$v[content]</td>
				<td>$v[pubtime]</td>
				<td>
					<a class='btn-del' href='$v[mid]'>删除</a>
					<a class='btn-update' href='#' data-toggle='$v[mid]'>修改</a>
				</td>
			</tr>";
	}
	echo "</tbody>";
	echo "</table>";

?>


<form action="msg_update.php" method="post" style="display: none;" id="inp4">
	<input type="hidden" name="mid" value="" id="inp1">
	<!-- 发布人姓名 -->
	<!-- <input type="text" name="uname"/> -->
	联系电话
	<input type="text" name="phone" id="phone"/>
	留言内容
	<input type="text" name="content" id="content"/>
	<input type="submit" value="修改"/>
	<input type="button" value="取消"/>
</form>


<script>
  //1(js):获取所删除按钮
  var tb1 = document.getElementById("tb1");
  tb1.onclick = function(e){
   	   var target = e.target;
	   if(target.className==='btn-del'){
		    e.preventDefault();
		    console.log(target);
		    var id=target.getAttribute("href");
		    // var id=target.dataset.toggle;
		    var rs=window.confirm('删除吗？');
		    if(rs){
		    	location.href='msg_del.php?mid='+id;
		    }
	   }else if(target.className==='btn-update'){
		    e.preventDefault();
		    var id=target.dataset.toggle;
		    inp1.value=id;
		    console.log(target,id,inp1.value);
		    console.log(inp1.parentNode);
		    console.log(phone.value);
		    inp1.parentNode.style.display="";
		    // var rs=window.confirm('删除吗？');
		    // if(rs){
		    // 	location.href='msg_del.php?mid='+id;
		    // }
	   }
  }


  inp1.parentNode.lastElementChild.onclick=function(){
  	inp1.parentNode.style.display="none";
  }


  var uReg=/^\s*$/;
  inp4.onsubmit=function(){
  		// console.log(1);return false;
  		
	  	// 	if(phone.value=""){
	  	// 		console.log(uReg.test(phone.value));
				// return false;
	  	// 	}

		if(uReg.test(phone.value)||uReg.test(content.value)){
			console.log(uReg.test(phone.value),uReg.test(content.value));
			alert("不能为空！");
			return false;
		} 

		// if(uReg.test(content.value)){
		// 	console.log(uReg.test(content.value));
		// 	return false;
		// } 
		console.log(phone.value,content.value,isNaN(phone.value));
		if(isNaN(phone.value)){
			alert("号码请输入数字！");
			return false;
		}
		
		return true;
   }
</script>