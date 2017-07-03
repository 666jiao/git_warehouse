
$("#bt-register").click(function(){
	var u=$("#uname").val();
	var p=$("#upwd").val();
	var m=$("#umail").val();
	var h=$("#homepage").val();

	if(u==""){alert("用户名不能为空");return;}
	if(p==""){alert("密码不能为空");return;}
	if(m!=p){alert("密码不同");return;}
	if(h==""){alert("主页地址不能为空");return;}

	$.ajax({
		type:"POST",
		url:"/register",
		data:{uname:u,upwd:p,homepage:h},
		success:function(data){
			console.log(data);
			if(data.code===1){
				alert("注册成功，1秒跳");
				setTimeout(function(){
					location.href="login.html";
				},1000);
			}else if(data.code===-1){
				alert("注册失败");
			}
		}
	})
})

$("#uname").blur(function(){
	$.ajax({
		url:'/regist?uname='+uname.value,
		success:function(data){
			console.log(data.code)
			jing.innerHTML=data.msg;
		}
	})
})

