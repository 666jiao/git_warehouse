$(function(){
	$("#header").load("data/header.php");
  	$("#footer").load("data/footer.php");

	// $.ajax({
	// 	url:"data/header.php",
	// 	success:function(data){
	// 		$("#header").html(data);
	// 	}
	// })

	// $.ajax({
	// 	url:"data/footer.php",
	// 	success:function(data){
	// 		$("#footer").html(data);
	// 	}
	// })
	 
	

	// var uid = 4;
	// 
	
	var cookieArray=document.cookie.split("; ");
	var cookieObj={};
	for(var i=0;i<cookieArray.length;i++){
		var sub=cookieArray[i].split("=");
		var key=sub[0];
		var val=sub[1];
		cookieObj[key]=val;
	}
	// cookieObj.uid=null;
	if(!cookieObj.user){
		location.href='productlist.html';
	}
	
	
	
	console.log(cookieObj.user);
	$.ajax({
		type:"POST",
		url:"data/cartlist.php",
		data:{uid:cookieObj.user},
		success:function(data){
			console.log(data.length,data);
			var html="";
			for(var s of data){
				html+=`<tr>
		                    <td>
		                        <input type="checkbox"/>
		                        <input type="hidden" value="1" />
		                        <div><img src="${s.pic}" alt=""/></div>
		                    </td>
		                    <td><a href="">${s.pname}</a></td>
		                    <td>${s.price}</td>
		                    <td>
		                        <button class="${s.cid}">-</button>
		                        <input type="text" value="${s.count}" class="inp-cnt"/>
		                        <button class="${s.cid}">+</button>
		                    </td>
		                    <td><span>${s.price*s.count}</span></td>
		                    <td><a href="${s.cid}" class="btn-del">删除</a></td>
		                </tr>`
			}
			$("#cart>tbody").html(html);
		}
	})

	$("#selAll").click(function(){
		
	})



	$("#cart>tbody").on('click','a.btn-del',function(e){
		e.preventDefault();
		console.log($(this).attr("href"));
		var s=$(this).attr("href");
		var self=this;
		$.ajax({
			type:"POST",
			url:"data/del_shoppingcart.php",
			data:{cid:s},
			success:function(data){
				if(data.code>0){
					alert(data.msg);
					$(self).parent().parent().remove();
				}else{
					alert(data.msg)
				}
			}
		})
	})


	$("#cart>tbody").click(function(e){
		var target=e.target;
		if($(target).html()=="+"){
			console.log($(target).prop('class'));
			var s=$(target).prop('class');
			$.ajax({
				type:"POST",
				url:"data/addcountcart.php",
				data:{cid:s},
				success:function(data){
					if(data.code>0){
						console.log(data.msg)
						var n=parseInt($(target).prev().val());
						n+=1;$(target).prev().val(n);
						var s=$(target).prev().val();
						var d=parseFloat($(target).parent().prev().html());
						var k=s*d;console.log(k)
						$(target).parent().next().children('span').html(k);
					}else{
						alert(data.msg)
					}
				}

			})
		}
	})

	$("#cart>tbody").click(function(e){
		var target=e.target;
		if($(target).html()=="-"){
			console.log($(target).prop('class'));
			var s=$(target).prop('class');
			var n=parseInt($(target).next().val());
			if(n>1){n-=1};
			$.ajax({
				type:"POST",
				url:"data/subcountcart.php",
				data:{cid:s,num:n},
				success:function(data){
					if(data.code>0){
						console.log(data.msg)
						$(target).next().val(n);
						var s=$(target).next().val();
						var d=parseFloat($(target).parent().prev().html());
						var k=s*d;console.log(k)
						$(target).parent().next().children('span').html(k);
					}else{
						alert(data.msg)
					}
				}

			})
		}
	})

})