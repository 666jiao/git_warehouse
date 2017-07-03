//右上角下拉菜�?
//查找class为app_jd和service的li
var lis=document.querySelectorAll(".app_jd,.service" );
//为每个li绑定鼠标进入和鼠标移出事�?
for(var i=0;i<lis.length;i++){
  lis[i].onmouseover=function(){
    //this->当前li
    //找到当前li下最后一个子元素，设置其显示
    this.lastElementChild.style.display="block";
    this.children[1].className="hover";
  };
  lis[i].onmouseout=function(){
    //找到当前li下最后一个子元素，设置其隐藏
    this.lastElementChild.style.display="";
    this.children[1].className="";
  }
}

var category=document.getElementById("category");
category.onmouseover=function(){
  this.lastElementChild.style.display="block";
};
category.onmouseout=function(){
  this.lastElementChild.style.display="";
};

var lis=document.querySelectorAll("#cate_box>li");
for(var i=0;i<lis.length;i++){
  lis[i].onmouseover=function(){
    this.lastElementChild.style.display="block";
    this.firstElementChild.className="hover";
  };

  lis[i].onmouseout=function(){
    this.lastElementChild.style.display="";
    this.firstElementChild.className="";
  }
}