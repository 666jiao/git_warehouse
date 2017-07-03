/*广告图片数组*/
//var imgs=[
//  "images/index/banner_01.jpg",
//  "images/index/banner_02.jpg",
//  "images/index/banner_03.jpg",
//  "images/index/banner_04.jpg",
//  "images/index/banner_05.jpg",
//];

var imgs=[
  {"i":0,"img":"images/index/banner_01.jpg"},
  {"i":1,"img":"images/index/banner_02.jpg"},
  {"i":2,"img":"images/index/banner_03.jpg"},
  {"i":3,"img":"images/index/banner_04.jpg"},
  {"i":4,"img":"images/index/banner_05.jpg"},
]


var slider={
  liwidth:0,
  DURATION:1000,
  init:function(){
    this.liwidth=parseFloat($("#slider").css("width"));
    this.updateView();
    $("#indexs").on("mouseover","li:not(.hover)",function(e){
      var $target=$(e.target);
      this.move($target.html()-$target.siblings(".hover").html());
    }.bind(this));
  },
  move:function(n){
      $("#imgs").stop(true);
      if(n<0){
        n*=-1;
        imgs=img.splice(imgs.length-n,n).concat(imgs);
        this.updateView();
        var left=parseFloat($("#imgs").css("left"));
        $("#imgs").css("left",left-n*this.liwidth);
        $("#imgs").animate({left:"0"},this.DURATION);
      }else{
        $("#imgs").animate({left:-n*this.liwidth+"px"},this.DURATION,this.endMove.bind(this,n));
      }
  },
  endMove:function(n){
      imgs=imgs.concat(imgs.splice(0,n));
      this.updateView()
      $("#img").css("left",0);
  },
  updateView:function(){
    for(var i=0,html="",idxs="";i<imgs.length;i++){
      html+="<li><img src='"+imgs[i].img+"'></li>";
      idxs+="<li>"+(i+1)+"</li>";
    }
    $("#imgs").html(html).css("width",this.liwidth*imgs.length);
    $("#indexs").html(idxs);
    $("#indexs>li:eq("+imgs[0].i+")").addClass("hover").siblings(".hover").removeClass("hover");
  }
}
slider.init();