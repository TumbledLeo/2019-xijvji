// 加载
// var root = "http://localhost:8888/";
// var loader = new resLoader({
//     resources: [
//         root + 'images/fmsy_bg.jpg',
//         root + 'images/find_bg.jpg',
//         root + 'images/hdkd_bg.jpg',
//         root + 'images/bnhg_bg.jpg',
//         root + 'images/mtbd_bg.jpg',
//         root + 'images/banner.jpg', 
//     ],
//     onStart: function (total) {
//         // 开始的回调
//         // console.log('start:' + total);
//     },
//     onProgress: function (current, total) {
//         // 加载中的回调
//         // console.log(current + '/' + total);
//         var percent = current / total * 100;
//         $('.progressbar').css('width', percent + '%');
//     },
//     onComplete: function (total) {
//         // 加载完的回调
//         // console.log('加载完毕:' + total + '个资源');
//        // $('.js_start_layer').show();
//         // if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
//         //     new WOW().init();
//         // }
//         $('#progress').fadeOut(1500, function () {
//             setTimeout(function () {
                
//             }, 2300)
//         });

//     }
// });
//loader.start();
$(function () {
// tab切换
  function tabCtrl(ele) {
      $(ele + ' .tabContents .tabContent').hide().eq(0).show();
      $(ele + ' .tabs .tab').eq(0).addClass('active');
      $(ele + ' .tabs .tab').click(function (e) {
          e.stopPropagation();
          e.preventDefault();
          if ($(this).hasClass('active')) {
              return;
          }
          $(this).addClass('active').siblings().removeClass('active');
          let me = $(this);
          let index = 0;
          $(ele + ' .tabs .tab').each(function (i) {
              if (me.get(0) === $(this).get(0)) {
                  index = i;
              }
          });
          $(ele + ' .tabContents .tabContent').hide().eq(index).fadeIn();
      });
  }
  tabCtrl('.qd');
  tabCtrl('.ysts');
  tabCtrl('.ysw');
  tabCtrl('.syj');

//返回
$('.top').click(function(){
    $('html,body').animate( {scrollTop: 0}, 500);
});

var vh = 1000;
  $(window).scroll(function(){
  var this_scrollTop = $(this).scrollTop();
  if(this_scrollTop>vh ){
  $(".top").show();
  }else{
      $(".top").fadeOut();
  }
});

//音乐
let music = document.getElementById('aud');

$('.music_bg').click(function(){
            if($(this).hasClass('play')){
                music.pause();
                $(this).find('img').attr("src","images/play.png");
                $(this).removeClass('play');
            }else{
                music.play(); 
                $(this).addClass('play'); 
                $(this).find('img').attr("src","images/music.png");

            }
            
});

//视频
$('.closes').click(function(){
    $('.shipin').fadeOut();
    $('.shipin').find('video').attr('src','');
});
$('.videos').click(function(){
   // music.pause();
    var src = $(this).attr('data');
    $('.shipin').fadeIn();
    $('.shipin').find('video').attr('src',src);
    $('.music_bg').find('img').attr("src","images/play.png");
    $('.music_bg').removeClass('play');
});
//弹窗
var scrollTop = null;
$('.swiper-container3 .swiper-slide').click(function(event){
    $('.fly').fadeIn();
    mySwiper4.slideTo($(this).index()); 

    scrollTop = window.scrollY;
    document.body.style.position = 'fixed';
    $("body").css("top",-scrollTop);

}); 
$('.close').click(function(){
  
    $('.fly').fadeOut();
    document.body.style.position = '';
    $("body").css("top",'');
    window.scrollTo(0, scrollTop); 
});
//导航跳转
$('.logo li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('html,body').animate({scrollTop:$('.'+$(this).attr('data')).offset().top-100}, 800);
}); 
$(window).scroll(function () {
    var t = $(document).scrollTop();
        if (t < $('.jyx').offset().top-100) {
            $('.logo li').eq(0).addClass('active').siblings().removeClass('active');
        }else if(t < $('.ycap').offset().top-100){
            $('.logo li').eq(1).addClass('active').siblings().removeClass('active');
        }else if(t < $('.mtzs').offset().top-100){
            $('.logo li').eq(2).addClass('active').siblings().removeClass('active');
        }else if(t < $('.wjhg').offset().top-200){
            $('.logo li').eq(3).addClass('active').siblings().removeClass('active');
        }else if(t< $('.wjhg').offset().top-100){
            $('.logo li').eq(4).addClass('active').siblings().removeClass('active');
        }
        console.log(t);
});
// new CusScrollBar({
    //   contentSelector: '.scroll_cont0', //滚动内容区
    //   barSelector: '.scroll_bar0', //滚动条
    //   sliderSelector: '.scroll_slider0' //滚动滑块
    // });
    // new CusScrollBar({
    //     contentSelector: '.scroll_cont1', //滚动内容区
    //     barSelector: '.scroll_bar1', //滚动条
    //     sliderSelector: '.scroll_slider1' //滚动滑块
    //   });
    //   new CusScrollBar({
    //     contentSelector: '.scroll_cont2', //滚动内容区
    //     barSelector: '.scroll_bar2', //滚动条
    //     sliderSelector: '.scroll_slider2' //滚动滑块
    //   });
    //   new CusScrollBar({
    //     contentSelector: '.scroll_cont3', //滚动内容区
    //     barSelector: '.scroll_bar3', //滚动条
    //     sliderSelector: '.scroll_slider3' //滚动滑块
    //   });


      function flyup (emp){
     
        $(emp).hover(function(){
           
            $(this).find('.des').slideDown();
            
        },function(){
            $(this).find('.des').slideUp();
        });
      }
    //  flyup('.show');
});