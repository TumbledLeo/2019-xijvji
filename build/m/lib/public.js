


	// window.onload=function(){
	// //    var audio = document.getElementById('audio');
	// //  //  audio.play();
	// //    $('.icon_music').addClass('icon_music_on');

	// //     $('.aMusic').click(function(){
	// //         if(audio.paused){
	// //       //      audio.play();
	// //             $('.icon_music').addClass('icon_music_on');
	// //         }else{
	// //         //    audio.pause();
	// //             $('.icon_music').removeClass('icon_music_on');
	// //         }
	// // 		});
		
	// }

    // $('.aVideo').click(function(){
    // 	var state = $(this).attr('state');
    //     if(state==0){
    //         $('.index2_video').fadeIn();
    //         $(this).attr('state',1);
    //         audio.pause();
    //         $('.icon_music').removeClass('icon_music_on');
    //     }else{
    //         $('.index2_video').fadeOut();
    //         $(this).attr('state',0);
    //         audio.play();
    //         $('.icon_music').addClass('icon_music_on');            
    //     }
    // });

    // $('.aCloseVideo').click(function(){
    //     $('.index2_video').fadeOut();
    //     $(this).attr('state',0);
    //     audio.play();
    //     $('.icon_music').addClass('icon_music_on');
    // });


	// 视频
	// var video = document.getElementById('video');
	// $('#myModal_Video').on('shown.bs.modal', function (e) {
	// 	var ele = e.relatedTarget;
	// 	var num = $(ele).attr('num');
	// 	// var text = $(ele).find('dd').find('span').text();
	// 	// $('#videoTitle').text(text);
	// 	$('#video').attr('preload','preload');
	// 	$('#video').attr('src','media/'+num+'.mp4');
	// 	//
  //       audio.pause();
  //       $('.icon_music').removeClass('icon_music_on');
	// });

	// $('#myModal_Video').on('hidden.bs.modal', function (e) {
	// 	video.pause();
  //       audio.play();
  //       $('.icon_music').addClass('icon_music_on');
	// })



    // 
	var h = window.screen.availHeight/2-300;
	$('.aXq').click(function(){
		var par = $(this).parents('dt').parent();
		// var id = $(this).parents('.area').attr('id');
		// if(id=='area7'){
		// 	var url = $(par).attr('c_url');
		// 	window.open(url);
		// 	return false;
		// }
		var title = $(par).find('dd>p:eq(0)').text();
		var time = $(par).find('dd>p:eq(1)').html();
		var info = $(par).find('dd>article').html();
		var img = $(par).find('dd>p:eq(3)').html();
		var b = $(par).find('dd>p:eq(4)').html();
		
		$('.layCon_left').html(img);
		$('.layTitle').text(title);
		$('.layTime').html(time);
		$('.layInfo').html(info);
		$('.ljgp').html(b);
		$('.layerBg').fadeIn();
		$('.layCon').stop().animate({top:h+'px'}, { duration: 300, easing: "swing" });
	});
	


	$('.aXq2').click(function(){
		var par = $(this).parents('dd').parent();

		var title = $(par).find('dd>p:eq(0)').text();
		var time = $(par).find('dd>p:eq(1)').html();
		var info = $(par).find('dd>article').html();
		var img = $(par).find('dd>p:eq(3)').html();
	//	var b = $(par).find('dd>p:eq(4)').html();
		console.log(img);
	//	$('.layCon_left').html(img);
		$('.layTitle').text(title);
		$('.layTime').html(time);
		$('.layInfo').html(info);
		$('.ljgp').html(img);
		$('.layerBg').fadeIn();
		$('.layCon').stop().animate({top:h+'px'}, { duration: 300, easing: "swing" });
	});
	



	$('.aClose').on('click',function(){
		$('.layCon').stop().animate({top:'-200px'},{ duration: 300, easing: "swing" });
		$('.layerBg').fadeOut();
		$('.layTitle').text('');
		$('.layTime').text('');
		$('.layInfo').html('');
		$('.layCon_left').html('');
		$('.ljgp').html('');
	});

	$('.layerBg').on('click',function(e){
		$('.layCon').stop().animate({top:'-200px'},{ duration: 300, easing: "swing" });
		$('.layerBg').fadeOut();
		$('.layTitle').text('');
		$('.layTime').text('');
		$('.layInfo').html('');
	});

	$('.layCon').on('click',function(e){
		e.stopPropagation();
	});



	// 移动端
	$('.aNav').click(function(){
		var state = $(this).attr('state');
		if (state==0) {
			$('.layerNav').fadeIn();
			$(this).attr('state',1);
			$(this).addClass('aNavOn');
		}else if(state==1){
			$('.layerNav').fadeOut();
			$(this).attr('state',0);
			$(this).removeClass('aNavOn');
		}
	});

	$('.layerNav a').click(function(){
		$('.layerNav').hide();
		$('.aNav').attr('state',0);
		$('.aNav').removeClass('aNavOn');
	});

	$('.layerNav').click(function(){
		$('.layerNav').hide();
		$('.aNav').attr('state',0);
		$('.aNav').removeClass('aNavOn');
	});

