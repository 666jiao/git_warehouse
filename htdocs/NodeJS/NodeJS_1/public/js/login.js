
$('#bt-login').click(function(){
	var u=uname.value;
	var p=upwd.value;
	var reguname=/^\w{3,9}$/i;
	var regupwd=/^[a-z0-9]{6,12}$/i;
	if(!reguname.test(u)){
		alert("用户名错误");
		return;
	}else if(!regupwd.test(p)){
		alert("mima错误");
		return;
	}

	$.ajax({
		type:"POST",
		url:"/login",
		data:{u:u,p:p},
		success:function(data){
			console.log(data);
			if(data.code===1){
				alert(data.msg+"!1s后跳转用户中心"+data.uid);
				sessionStorage['uid']=data.uid;
				sessionStorage['uname']=data.uname;
				setTimeout(function(){
					location.href="usercenter.html";
				},1000)
			}else{
				alert("登录失败"+data.msg);
			}
		}
	})
})

