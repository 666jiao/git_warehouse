$(document).ready(function(){
	var uname='',uid='';
	$("#bt-login").click(function(){
		var u=$("[name=uname]").val(),
			p=$("[name=upwd]").val();
			console.log(u,p);
			$.ajax({
				type:"POST",
				url:"data/login.php",
				data:{uname:u,upwd:p},
				success:function(data,s){
					console.log(data,s);
					if(data.code<0){
						$("p.alert").html(data.msg);
					}else{
						$(".modal").hide();
						uname=data.uname;
						uid=data.uid;
						console.log(uname,uid);
						
						setCookie('user',uid,dateCookie(7));
					}
				}
			})
	})
	
	// setCookie('user',uid,dateCookie(-1));
	// setCookie('','unameqiangdong',dateCookie(-1));
	console.log(document.cookie);
	if(getCookie('user')){
		$(".modal").hide();
	}
	console.log(getCookie('user'));
	function setCookie(key,value,e){
		document.cookie=encodeURIComponent(key)+'='+encodeURIComponent(value)+';expires='+e;
		console.log(document.cookie)
	}
	function dateCookie(expires){
		var seda=new Date()
		seda.setDate(seda.getDate()+expires)
		return seda
	}

	function getCookie(name){
		var arrStr=document.cookie.split('; ')
		for(var i=0;i<arrStr.length;i++){
			var arr=arrStr[i].split('=')
			if(arr[0]==name){
				return decodeURIComponent(arr[1])
			}
		}
		return ''
	}



	$.ajax({
		url:"data/productpage.php",
		success:function(data){
			console.log(data.page);
			var html="";
			for(var i=1;i<=data.page;i++){
				html+=`<li><a href="#">${i}</a></li>`;
			}
			$("ol.pager").html(html);
			$("ol.pager>li").first().addClass("active");
		}
	})
	
	~(function(s){
		show(1);
	})()

	$("ol.pager").on("click","li>a",function(e){
		 e.preventDefault();
		 $(this).parent().addClass("active").siblings().removeClass("active");
		  var pno = $(this).html();
		  show(pno);

		// var target=e.target;
		// console.log($(this).children().html(),$(target).html());
		// $(this).addClass("active").siblings().removeClass("active");
		// var n=$(this).children().html();
		// 	n=(n-1)*8;
		// 	if(n==0){n=1}
		// 	console.log(n);
		// $.ajax({
		// 	type:"POST",
		// 	url:"data/productlist.php",
		// 	data:{num:n},
		// 	success:function(data){
		// 		// console.log(data[0].pid);
		// 		var html="";
		// 		for(var s of data){
		// 			html+=`<li>
		// 					    <a href=""><img src="${s.pic}" alt=""/></a>
		// 					    <p>￥${s.price}</p>
		// 					    <h1><a href="">${s.pname}</a></h1>
		// 					    <div>
		// 					        <a href="" class="contrast"><i></i>对比</a>
		// 					        <a href="" class="p-operate"><i></i>关注</a>
		// 					        <a href="${s.pid}" class="addcart"><i></i>加入购物车</a>
		// 					    </div>
		// 					</li>`
		// 		}
		// 		$("#plist>ul").html(html);
		// 	}
		// })
	})


	$.ajax({
		url:"data/header.php",
		success:function(data){
			$("#header").html(data);
		}
	})

	$.ajax({
		url:"data/footer.php",
		success:function(data){
			$("#footer").html(data);
		}
	})


	// 功能模块4 添加购物车
	$("#plist").on("click","a.addcart",function(e){
		e.preventDefault();
		var pid=$(this).prop("href");
			pid=pid.slice(pid.length-1);
			console.log(uid,pid);
		var uid=getCookie('user');
			console.log(uid);
		$.ajax({
			type:"POST",
			url:"data/add_cart.php",
			data:{pid:pid,uid:uid},
			success:function(data){
				console.log(data.code,data);
				if(data.code<0){
					alert("添加失败，原因："+data.msg);
				}else{
					alert("添加成功，该商品已经购买："+data.count+"件");
				}
			},
			error:function(data){
				alert("添加商品失败，请检查网络");
			}
		})
	})


	$("#header").on("click","#settle_up",function(){
		// document.cookie='uid='+uid;
		// document.cookie='uname='+uname;
		location.href='shoppingcart.html';
	}) 
	


// =================================================================
	var arr1=[[1,4,3,6,23,8],[4,6,16,3,9],[7,20,9,4,1]];
	for(var i=0;i<arr1.length;i++){
		for(var j=0;j<arr1[i].length;j++){
			console.log(arr1[i][j]);
		}
	}
	$.each(arr1,function(c,item){
	  // console.log(c,item,arr1[c]);
	  for(var i=0;i<arr1[c].length;i++){
	  		console.log($(arr1[c][i]));
	  }
	});

	var obj=[{one:1,two:2,three:3,four:4},{five:5,six:6,seven:7,argit:8}];   
	$.each(obj,function(key,val){   
	  console.log(key,val,obj[key],val.one);      
	});
	var arr=["one","two","three","four"];   
	 $.each(arr,function(s,c){
	  console.log(this,s,c);   
	 });
// ==========================================================================

})


function show(pno){
	// 第二个模块：产品列表
	$.ajax({
		// type:"POST",
		url:"data/productlist.php?pno="+pno,
		// data:{num:s},
		success:function(data){
			console.log(data[0].pid);
			var html="";
			for(var s of data){
				html+=`<li>
						    <a href=""><img src="${s.pic}" alt=""/></a>
						    <p>￥${s.price}</p>
						    <h1><a href="">${s.pname}</a></h1>
						    <div>
						        <a href="" class="contrast"><i></i>对比</a>
						        <a href="" class="p-operate"><i></i>关注</a>
						        <a href="${s.pid}" class="addcart"><i></i>加入购物车</a>
						    </div>
						</li>`
			}
			// 
			// $.each(data,function(s,c){

			// })
			$("#plist>ul").html(html);
		}
	}) 	
}


	