<style>
#div1{
	background-color:#FFFF00; 
	position:absolute;
	width:360px; 
	height:250px; 
	filter: revealTrans(transition=12, duration=0.1) blendTrans(duration=0.1);
}

#title{
	background-color:#eee;
	padding:2px; 
	font-size:13px;
	text-indent:5;
	color:#000;
	cursor:move;
	/*visibility: hidden;*/
}

#close{
	width: 15px;
	height: 15px;
	position:absolute;
	right:2; 
	top:2;
	border:0;
}
</style>

<div id="div1" style="top:0;left:0;">
<div id="title" style="">源码爱好者</div>
<img id="close" onclick=Hide(div1) src="img/bth.png"/>
</div>

<script>
var Obj=false,pX=0,pY=0;

title.onclick=function(){
	DIVDown("div1");
	console.log(this.parentElement);
}

function DIVDown(tag){
	Obj=tag;
	pX=parseFloat(document.all(Obj).style.left)-event.x;
	pY=parseFloat(document.all(Obj).style.top)-event.y;
	console.log(pX,pY,document.all(Obj));
}

document.onmousemove=function(){
	if(Obj!=false){
		var l=pX+event.x,s=pY+event.y,k=window.innerWidth||document.body.offsetWidth
		j=window.innerHeight||document.body.offsetHeight;
		if(l<0){l=0}else if(l>(k-div1.offsetWidth)){l=k-div1.offsetWidth}
		if(s<0){s=0}else if(s>(j-div1.offsetHeight)){s=j-div1.offsetHeight}
		document.all(Obj).style.left=l;
		document.all(Obj).style.top=s;
		event.returnValue=false; // event.preventDefault();
		console.log(pX,pY);
	} 
}

document.ondblclick=function(){
	Obj=false;
}

function Hide(divid){
    divid.style.display = "none";
}

</script>