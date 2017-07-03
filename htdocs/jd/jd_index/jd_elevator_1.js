$(()=>{
  //获得所有楼层气泡span
  var $spans=$(".floor>header>span:first-child");
  //获得id为elevator的div
  var $elev=$("#elevator");
  //为window绑定滚动事件
  $(window).scroll(()=>{
    //获得页面滚动过的高度:
    var scrollTop=$("body").scrollTop();
    //遍历每个span
    $spans.each((i,span)=>{
      var $span=$(span);
      //如果当前span的offsetTop<(scrollTop+innerHeight/2)
      if($span.offset().top<scrollTop+innerHeight/2){
        //清除所有span的class
        $spans.removeClass("hover");
        //让当前span为hover
        $span.addClass("hover");
        //设置$elev下ul下的第i个li为active，清除其余li的class
        $elev.find("ul>li:eq("+i+")").addClass("active").siblings().removeClass("active");
      }else{
        //移出当前span的hover
        $span.removeClass("hover");
      }
    })
    //如果$spans中有.hover的
    if($spans.is(".hover")){
      $elev.show();//设置$elev显示
    }else{//否则
      $elev.hide();//设置$elev隐藏
    }
  })
})