/*广告图片数组*/
var imgs=[
	"images/index/banner_01.jpg",
    "images/index/banner_02.jpg",
    "images/index/banner_03.jpg",
    "images/index/banner_04.jpg",
    "images/index/banner_05.jpg"
];

$(()=>{
    //动态加载图片和数字
    var $ulImgs=$("#imgs");
    var $ulIdxs=$("#indexs");
    var liwidth=parseFloat($("#slider").css("width"));
    $ulImgs.css("width",(imgs.length+1)*liwidth);
    var strImgs='<li><img src="'+ imgs.join('"></li><li><img src="') +'"></li>';
    strImgs+=`<li><img src="${imgs[0]}"></li>`;
    $ulImgs.html(strImgs);
    for(var i=1,str="";i<=imgs.length;i++){
        str+="<li>"+ i +"</li>";
    }
    $ulIdxs.html(str).children(":first").addClass("hover");
//=======================================================================

    //自动轮播
    var speed=500,
        wait=1000,
        i=0,
        timer=null,
        canMove=true;
    function move(){
        timer=setTimeout(()=>{
            i++;
            $ulImgs.animate({
                left:-i*liwidth
            },speed,()=>{
                if(i==imgs.length){
                    i=0;
                    $ulImgs.css("left","");
                }
                $ulIdxs.children().eq(i).addClass("hover").siblings().removeClass("hover");
                if(canMove) move();
            });
        },wait)
    }
    move();

    //鼠标进入停止轮播
    $("#slider").hover(()=>{
        clearTimeout(timer);
        canMove=false;
    },()=>{
        canMove=true;
        move();
    });
//=============================================================

    $ulIdxs.on("mouseover","li:not(.hover)",e=>{
        i=$ulIdxs.children().index(e.target);
        $ulImgs.stop(true).animate({left:-i*liwidth},speed,()=>{
            $ulIdxs.children().eq(i).addClass("hover").siblings().removeClass("hover");
        })
    });
});













////DOM内容加载后执行
//$(()=>{
//  var $ulImgs=$("#imgs");
//  var $ulIdxs=$("#indexs");
//  //每个li的宽度
//  var LIWIDTH=parseFloat($("#slider").css("width"));
//  //设置ul的总宽度，容下所有li
//  $ulImgs.css("width",LIWIDTH*(imgs.length+1));
//  //将imgs中的图片动态生成为li>img
//  var strImgs='<li><img src="'+imgs.join('"></li><li><img src="')+'"></li>';
//  //再重复追加第一张图片
//  strImgs+=`<li><img src="${imgs[0]}"></li>`;
//  $ulImgs.html(strImgs);
//  //根据imgs中图片的个数动态生成索引li
//  for(var i=1,str="";i<=imgs.length;i++){
//    str+="<li>"+i+"</li>";
//  }
//  //设置默认第一个li为hover
//  $ulIdxs.html(str).children(":first").addClass("hover");
//
//
//  //自动轮播
//  var speed=1000;//每次轮播的时间
//  var wait=3000;//每次轮播之间等待时间
//  var timer=null;//保存一次性定时器的序号
//  var i=0;//保存当前显示的图片下标
//  //轮播一个周期
//  function move(){
//    timer=setTimeout(()=>{
//      i++;//i+1
//      //让$ulImgs的left在speed时间内，移动到-i*LIWIDTH
//      $ulImgs.animate({left:-i*LIWIDTH},speed,()=>{
//          //防止i越界
//          if(i==imgs.length){
//            i=0;
//            $ulImgs.css("left","");
//          }
//          //将$ulIdxs中的第i个li设置为hover,清除其兄弟的hover
//          $ulIdxs.children(":eq("+i+")").addClass("hover").siblings().removeClass("hover");
//          //只有可以move时
//          if(canMove)
//            //才再次回调move启动下次
//            move();
//        });
//    },wait);
//  }
//  move();//启动第一次
//
//  //标记变量，用来标记是否启用下次move
//  var canMove=true;
//  //为id为slider的div添加鼠标进入和移出事件
//  $("#slider").hover(()=>{//this->div
//      //停止一次性定时器
//        clearTimeout(timer);
//        canMove=false;
//      },()=>{
//        canMove=true; move();
//      });
//
//    //当鼠标进入index中的li时，滚动到指定的图片
//    $ulIdxs.on("mouseover","li:not(.hover)",e=>{
//      //获得当前li的下标
//      i=$ulIdxs.children().index(e.target);
//      console.log(i);
//      //先清空动画队列，再启动本次动画
//      $ulImgs.stop(true).animate({left:-i*LIWIDTH},speed,()=>{
//          //将$ulIdxs中的第i个li设置为hover,清除其兄弟的hover
//          $ulIdxs.children(":eq("+i+")").addClass("hover").siblings().removeClass("hover");
//      })
//    })
//})
