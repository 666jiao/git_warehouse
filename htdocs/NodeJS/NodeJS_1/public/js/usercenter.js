$("#header").load("header.html",function(){
	$('#welcome').html("欢迎回来"+sessionStorage['uname']+"&nbsp&nbsp&nbsp<a href='#' id='inout'>退出</a>");
}).on('click','#inout',function(e){
	e.preventDefault();
	console.log(12);
	sessionStorage.removeItem('uid');
		setTimeout(function(){
			location.href="login.html";
		},1000)
})

console.log(!sessionStorage['uid'],sessionStorage['uid']);
if(!sessionStorage['uid']) location.href="login.html";


$("#footer").load("footer.html");

$(".affix").on("click","li a",function(e){
	e.preventDefault();
	$(this).parent().addClass("active").siblings(".active").removeClass("active");
	var id=$(this).attr("href");
	$(id).addClass("active").siblings(".active").removeClass("active");
})

// svg统计图
$.ajax({
	url:"/svgstat",
	success:function(data){
		// var svgW=s1.getAttribute("width");
		// var svgH=s1.getAttribute("height");
		// console.log(svgW,svgH);
		// for(var i=0;i<data.length;i++){
		// 	console.log(data[i].value)
		// 	var dept=data[i];
		// 	var rect=document.createElementNS("http://www.w3.org/2000/svg","rect");
		// 	rect.setAttribute("width",svgW/(2*data.length+1));
		// 	rect.setAttribute("height",svgH*(dept.value)/10000);
		// 	rect.setAttribute("x",(svgW/(2*data.length+1))*(2*i+1));
		// 	rect.setAttribute("y",svgH-(svgH*(dept.value)/10000));
		// 	rect.setAttribute("fill",rc(0,255));
		// 	s1.appendChild(rect);
		// }
		// 
		var c=new FusionCharts({
	      type:"bar3d",//pie3d line bar3d bar2d
	      renderAt:"container-buystat-svg",
	      width:'800',
	      height:'400',
	      dataSource:{data:data}
	    });
	    c.render();//把图表泻染到DOM树
	}    
})


// canvas统计图
$.ajax({
	url:'/canvasstat',
	success:function(data){
		var myLine = new Chart(document.getElementById("canvas-buystat").getContext("2d")).Bar(data);
	}
})

// 多表查询sql语句
// select p.pic,p.pname,p.price,d.count from jd_order o,jd_order_detail d,jd_product p 
// where d.orderId=o.oid and d.productId=p.pid and o.userId=10;

// 我的订单
var s=sessionStorage['uid'];
console.log(s);
$.ajax({
	type:'GET',
	url:'/orders',
	data:{uid:sessionStorage['uid']},
	// url:'/orders?uid='+sessionStorage['uid'],
	success:function(data){
		for(var s of data){
			var n=`<tr style="text-align:center;">
					<td>${s.count}</td>
					<td><img src="${s.pic}" alt=""></td>
					<td>${s.pname}</td>
					<td>${s.price}</td>
				   </tr>`;
		   $("#tbo").append(n);
		}
	}
})





// ===================================================
$.ajax({
	url:"/getlist",
	success:function(data){
		// console.log(data.length);
		for(var i=0;i<data.length;i++){
			for(var k in data[i]){
				if(i==0){
					var h=`<th>${k}</th>`;
					// $("#tr1").append(h);
					// console.log(h);
				}
			}
			var s=`<tr>
					<td>${data[i].oid}</td>
					<td>${data[i].rcvName}</td>
					<td>${data[i].price}</td>
					<td>${data[i].price}</td>
					<td>${data[i].orderTime}</td>
					<td>${data[i].status}</td>
					<td>${data[i].userId}</td>
				   </tr>`;
				// $("#tbo").append(s);
				// console.log(data[i]);
		}
	}
})
// =====================================================


// 抽奖转盘
var c2=document.getElementById('canvas-lottery');
var btn=document.getElementById('bt-lottery');
var ctx=c2.getContext("2d");
var w=c2.width;
var h=c2.height;
// w=c2.width=window.innerWidth,                                
// h=c2.height=window.innerHeight;

var progress=0;
var p4=new Image();
p4.src="img/pin.png";
p4.onload=function(){
  progress+=50;
  if(progress==100){
    startDraw();
  }
}
var p3=new Image();
p3.src="img/pan.png";
p3.onload=function(){
  progress+=50;
  if(progress==100){
    startDraw();
  }
};
  

function startDraw(){
  var deg=0,k=0;
  ctx.translate(w/2,h/2);
  ctx.drawImage(p3,-499/2,-499/2);
  ctx.drawImage(p4,-22,-97);
  var s=null,a=null;
  btn.onclick=function(){
    var d=5000*Math.random();
    if(d<1000) d+=4000;
    else if(d<2000) d+=3000;
    else if(d<3000) d+=2000;
    else if(d<4000) d+=1000;
    console.log(d);
    this.disabled=true;
    s=setInterval(function(){
      ctx.clearRect(0,0,w,h);
      ctx.save();
      ctx.rotate(deg*Math.PI/180);
      ctx.drawImage(p3,-499/2,-499/2);
      ctx.restore();
      deg+=k;
      ctx.drawImage(p4,-22,-97);
      if(deg>d){
        console.log(deg)
          k-=0.01;
          if(k<0){
            deg=0;k=5;
            clearInterval(s);
            btn.disabled=false;
            console.log(deg,k)
          }
      }else if(deg<d){
      		k+=0.1;
      		console.log(k)
      }
    },10);
  }
}
// =================================================




function rn(min,max){
	var n=Math.floor(Math.random()*(max-min)+min);
	return n;
}

function rc(min,max){
  var r=rn(min,max);
  var g=rn(min,max);
  var b=rn(min,max);
  return `rgb(${r},${g},${b})`;
}


