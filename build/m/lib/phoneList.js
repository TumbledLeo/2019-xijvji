


 ;(function ($) {
     $.fn.carousel=function (options) {
         var defaults={
              //各种参数、各种属性
              dlClass:'',
              activeClass:'active',
              //事件
              eventClick:'click',
         };
         var opts=$.extend(defaults,options);
         var _that = $(this);

        $(this).find(opts.dlClass).find('a').eq(0).addClass('active');
        $(this).find('.carousel-indicators').find('li').eq(0).addClass('active');
        $(this).find('.aLeft').hide();

        var methods = {
          //方法
          mediaIndex:function(len){
            // console.log(len);
            var index;
            for(var i = 0; i <len;i++){
                if($(_that).find(opts.dlClass).find('a').eq(i).hasClass('active')){
                    index=i;
                }
            }
            // console.log(index);
            return index;
          },
          mediaNext:function(len,index){
                if(index==len-1){
                    // console.log(1111111111);
                    $(_that).find('.aRight').hide();
                    return false;
                }
                $(_that).find('.aLeft').show();

                var c = index+1;
                $(_that).find(opts.dlClass).find('a').removeClass('active');
                $(_that).find(opts.dlClass).find('a').eq(index+1).addClass('active');
                $(_that).find('.carousel-indicators').find('li').removeClass('active');
                $(_that).find('.carousel-indicators').find('li').eq(index+1).addClass('active');
                $(_that).find(opts.dlClass).stop().animate({
                    marginLeft:-100*c+'%'
                },300);

                if(index==len-2){
                    $(_that).find('.aRight').hide();
                }
            },
            mediaPrev:function(index){
                if(index==0){
                    $(_that).find('.aLeft').hide();
                    return false;
                }
                $(_that).find('.aRight').show();
                console.log(index-1);

                var c = index-1;
                $(_that).find(opts.dlClass).find('a').removeClass('active');
                $(_that).find(opts.dlClass).find('a').eq(index-1).addClass('active');
                $(_that).find('.carousel-indicators').find('li').removeClass('active');
                $(_that).find('.carousel-indicators').find('li').eq(index-1).addClass('active');        

                $(_that).find(opts.dlClass).stop().animate({
                    marginLeft:-100*c+'%'
                },300);

                if(index==1){
                    $(_that).find('.aLeft').hide();
                }
            },
            _vertical:function(){
                $(_that).find(opts.dlClass).css({marginLeft:0});
                $(_that).find('.btnWrp').hide();
                $(_that).find('.carousel-indicators').hide();
            },
            _horizontal:function(){
                $(_that).find('.btnWrp').show();
                $(_that).find('.carousel-indicators').show();
                $(this).find(opts.dlClass).find('a').eq(0).addClass('active');
                $(this).find('.carousel-indicators').find('li').eq(0).addClass('active');
                $(this).find('.aLeft').hide();      
            }
        }



             var eventFun = {
                touchstart: function(e) {
                     // e.preventDefault();
                     startX = e.originalEvent.changedTouches[0].pageX,
                     startY = e.originalEvent.changedTouches[0].pageY;
                },
                touchmove: function(e) {
            　　　　moveEndX1 = e.originalEvent.changedTouches[0].pageX,
            　　　　moveEndY1 = e.originalEvent.changedTouches[0].pageY,
            　　　　X1 = moveEndX1 - startX,
            　　　　Y1 = moveEndY1 - startY;
                   var width = $(_that).width()/4;

            　　　　if ( Math.abs(X1) > Math.abs(Y1) && X1 > 0 ) {
                        e.preventDefault();
            　　　　}
            　　　　else if ( Math.abs(X1) > Math.abs(Y1) && X1 < 0 ) {
                        e.preventDefault();
            　　　　}

                },
                touchend: function(e) {
            　　　　e.preventDefault();
            　　　　moveEndX = e.originalEvent.changedTouches[0].pageX,
            　　　　moveEndY = e.originalEvent.changedTouches[0].pageY,
            　　　　X = moveEndX - startX,
            　　　　Y = moveEndY - startY;
                   var width = $(_that).width()/4;

                   console.log(Math.abs(X));
                   console.log(Math.abs(Y));

            　　　　if ( Math.abs(X) > Math.abs(Y) && X > 0 ) {
                        e.preventDefault();
                        var len = $(_that).find(opts.dlClass).find('a').length;
                        var actIndex = methods.mediaIndex(len);
                        methods.mediaPrev(actIndex);
            　　　　}
            　　　　else if ( Math.abs(X) > Math.abs(Y) && X < 0 ) {
                        e.preventDefault();
                        var len = $(_that).find(opts.dlClass).find('a').length;
                        var actIndex = methods.mediaIndex(len);
                        methods.mediaNext(len,actIndex);
            　　　　}
                }
            }
            var touchName = ['touchstart','touchmove','touchend'];
            var bindTouch = function(view){
                view.listener = {};
                for(var i in touchName){
                    // view.addEventListener(touchName[i],eventFun[touchName[i]],false)
                    view.on(touchName[i],eventFun[touchName[i]]);
                }
            }

            var unbindTouch = function(view){
                view.listener = {};
                for(var i in touchName){
                    // view.removeEventListener(touchName[i],eventFun[touchName[i]])
                    view.off(touchName[i],eventFun[touchName[i]])
                }
            }


         this.each(function () {
             var _this = $(this);
             var touchEle = $(_this).find('.areaTouch');

             _this.find('.aRight').bind(opts.eventClick,function () {
                var len = $(this).attr('len');
                var actIndex = methods.mediaIndex(len);
                methods.mediaNext(len,actIndex);
             });     

             _this.find('.aLeft').bind(opts.eventClick,function () {
                var len = $(this).attr('len');
                var actIndex = methods.mediaIndex(len);
                methods.mediaPrev(actIndex);
             });

             _this.find('.aMore').bind(opts.eventClick,function () {
                var state = $(this).attr('state');
                var dl = $(_that).find(opts.dlClass);
                if(state==0){
                    //
                    methods._vertical();
                    $(dl).removeClass('areaDl');
                    $(this).find('span').text('合上收起');
                    $(this).attr('state',1);
                    unbindTouch(touchEle);
                }else if(state==1){
                    methods._horizontal();
                    $(dl).addClass('areaDl');
                    $(this).find('span').text('展开全部');
                    $(this).attr('state',0);
                    bindTouch(touchEle);
                }
             });
             bindTouch(touchEle);
         });

     };
 })(jQuery);








            // $(_this).find(opts.dlClass).on({
            //     touchstart: function(e) {
            //          // e.preventDefault();
            //          startX = e.originalEvent.changedTouches[0].pageX,
            //          startY = e.originalEvent.changedTouches[0].pageY;
            //     },
            //     touchmove: function(e) {
            // 　　　　moveEndX1 = e.originalEvent.changedTouches[0].pageX,
            // 　　　　moveEndY1 = e.originalEvent.changedTouches[0].pageY,
            // 　　　　X1 = moveEndX1 - startX,
            // 　　　　Y1 = moveEndY1 - startY;
            //        var width = $(_that).width()/4;

            // 　　　　if ( Math.abs(X1) > Math.abs(Y1) && X1 > 0 ) {
            //             e.preventDefault();
            // 　　　　}
            // 　　　　else if ( Math.abs(X1) > Math.abs(Y1) && X1 < 0 ) {
            //             e.preventDefault();
            // 　　　　}

            //     },
            //     touchend: function(e) {
            // 　　　　e.preventDefault();
            // 　　　　moveEndX = e.originalEvent.changedTouches[0].pageX,
            // 　　　　moveEndY = e.originalEvent.changedTouches[0].pageY,
            // 　　　　X = moveEndX - startX,
            // 　　　　Y = moveEndY - startY;
            //        var width = $(_that).width()/4;

            //        console.log(Math.abs(X));
            //        console.log(Math.abs(Y));

            // 　　　　if ( Math.abs(X) > Math.abs(Y) && X > 0 ) {
            //             e.preventDefault();
            //             var len = $(_that).find(opts.dlClass).find('a').length;
            //             var actIndex = methods.mediaIndex(len);
            //             methods.mediaPrev(actIndex);
            // 　　　　}
            // 　　　　else if ( Math.abs(X) > Math.abs(Y) && X < 0 ) {
            //             e.preventDefault();
            //             var len = $(_that).find(opts.dlClass).find('a').length;
            //             var actIndex = methods.mediaIndex(len);
            //             methods.mediaNext(len,actIndex);
            // 　　　　}
            //     }
            // })













            // $(_this).find(opts.dlClass).on({
            //     touchstart: function(e) {
            //          e.preventDefault();
            //          startX = e.originalEvent.changedTouches[0].pageX,
            //          startY = e.originalEvent.changedTouches[0].pageY;
            //     },
            //     touchmove: function(e) {
            //          // e.preventDefault();
            //     },
            //     touchend: function(e) {
            //          moveEndX = e.originalEvent.changedTouches[0].pageX,
            //          moveEndY = e.originalEvent.changedTouches[0].pageY,
            //          X = moveEndX - startX,
            //          Y = moveEndY - startY;
            //          var width = $(_that).width()/2;
            //          // console.log(X);

            //          if ( X > width ) {        //从左往右拖动  （下一页）
            //             var len = $(_that).find(opts.dlClass).find('a').length;
            //             var actIndex = methods.mediaIndex(len);
            //             methods.mediaNext(len,actIndex);
            //          }
            //          else if ( X < width ) {   //从右往左拖动  （上一页）
            //             var len = $(_that).find(opts.dlClass).find('a').length;
            //             var actIndex = methods.mediaIndex(len);
            //             methods.mediaPrev(actIndex);
            //          }
            //          else if( Y  > 0 ){
            //          }else if( Y  < 0 ){
            //          }else{
            //          }

            //          X=0;
            //          Y=0;
            //          startX=0;
            //          startY=0;
            //     }
            // })