$(document).ready(function(){
	$.preload('./images/features/feature_paint_01.jpg',
			'./images/features/feature_paint_02.jpg',
			'./images/features/feature_specs_01.jpg',
			'./images/features/feature_specs_02.jpg',
			'./images/features/feature_cross_01.jpg',
			'./images/features/feature_cross_02.jpg',
			'./images/features/feature_environment_01.jpg',
			'./images/features/feature_environment_02.jpg');
});
$(window).load(function() {
	if($(window).width() <= 768){
		$(".insText")[1].children[0].style.opacity= "0.3";
		$(".addText")[1].children[0].style.opacity= "0.3";
	}
	if($(window).width() <= 550){
		$(".bSubText")[1].children[0].style.opacity= "0.3";
	}			
	$('.homeBtn').click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveTo(1);
	});
	$('#videoCarousel').carousel({
		interval: false
	}); 
	YoutubeAPI();	
	setHidden();
	FullPageFunc();		
	tickIconSvg();
	InfoIconSvg();
	videoBtn();
	setVideoSize();
});
$(window).resize(function(){	
	if($(window).width() <= 768){
		$(".insText")[1].children[0].style.opacity= "0.3";
		$(".addText")[1].children[0].style.opacity= "0.3";		
	}else{
		$(".insText")[0].children[0].style.opacity= "1";
		$(".insText")[1].children[0].style.opacity= "1";
		$(".addText")[0].children[0].style.opacity= "1";
		$(".addText")[1].children[0].style.opacity= "1";				
		$(".slidesContainer")[0].style = "transform: translateX(0%);";
		$(".slidesContainer")[0].style.webkitTransform = "translateX(0%)";
		$(".slidesContainer")[1].style = "transform: translateX(0%);";
		$(".slidesContainer")[1].style.webkitTransform = "translateX(0%)";		
	}
	setVideoSize();
	if($(window).width() <= 550){
		$(".bSubText")[1].children[0].style.opacity= "0.3";
	}else{
		$(".bSubText")[0].children[0].style.opacity= "1";
		$(".bSubText")[1].children[0].style.opacity= "1";
		$(".benfitsSlider")[0].style = "transform: translateX(0%);";
		$(".benfitsSlider")[0].style.webkitTransform = "translateX(0%)";
	}
});

function FullPageFunc(){
var firstTime = true;
	$('#fullpage').fullpage({
		'verticalCentered': false,
		'css3': true,
		//'sectionsColor': ['#454545', '#454545', '#454545', '#454545', '#454545', '#454545', '#454545', '#454545'],
		'navigation': true,
		'navigationPosition': 'right',
		'navigationTooltips': ['HOME', 'BENFITS', 'FEATURES', 'INSTALLATION', 'ADDITIONAL', 'CASESTUDY', 'CLIENTS', 'FAQ', 'INTERESTED', 'FOOTER', 'VIDEO'],

		'afterLoad': function(anchorLink, index){
			if(index == 1){
				$(".navtopbar").removeClass("opacityZero");
				$('.homeBtn')[0].style.opacity = "0";
			}else{
				$('.homeBtn')[0].style.opacity = "1";
			}
			
			if(index == 2){					
				for(var i=0; i<$('.benfitTopic')[0].children.length; i++){
					$($('.benfitTopic')[0].children[i]).delay(100*i).queue(function(){
						$(this).addClass("visible animated fadeInUp");
					});
				}			
				$('.bSubText').delay(100).queue(function(){
					$(this).addClass("visible animated fadeIn");
				});
				$('.benfitsPoint1').delay(300).queue(function(){
					for(var i=0; i<$('.benfitsPoint1')[0].children.length; i++){
						$($('.benfitsPoint1')[0].children[i]).delay(100*i).queue(function(){
							$(this).addClass("visible animated fadeInUp");
						});
					}
				});					
				$('.benfitsPoint2').delay(500).queue(function(){
					for(var i=0; i<$('.benfitsPoint2')[0].children.length; i++){
						$($('.benfitsPoint2')[0].children[i]).delay(100*i).queue(function(){
							$(this).addClass("visible animated fadeInUp");
						});
					}
				});					
			}
			
			if(index == 3){
				if(firstTime){
					featurePoint(1);
					firstTime = false;
				}
				for(var i=0; i<$('.featuresPoint')[0].children.length; i++){
					$($('.featuresPoint')[0].children[i]).delay(100*i).queue(function(){
						$(this).addClass("visible animated fadeInUp");
					});
				}					
				$('.featuresBoard1').addClass("visible animated bounceInLeft");
				$('.featuresBoard2').delay(100).queue(function(){
					$(this).addClass("visible animated bounceInLeft");
				});
			}
			if(index == 4){
				$('.Topic').eq(0).addClass('visible animated fadeInUp');
				$('.Topic').eq(1).addClass('visible animated fadeInUp');
				for(var i=0; i<$('.insImg1').length; i++){
					$('.insImg1').eq(i).addClass('visible animated fadeInUp');
				}
				
				for(var i=0; i<$('.insText').length; i++){
					$('.insText').eq(i).delay(100*(i+1)).queue(function(){	
						$(this).addClass('visible animated fadeInUp');
					});
				}
			
				for(var i=0; i<$('.insPoint1')[0].children.length; i++){
					$($('.insPoint1')[0].children[i]).delay(300*(i+1)).queue(function(){					
					    $(this).addClass("visible animated fadeIn");
					    $(this).removeClass("hiddenHide");
					});
				}
				for(var i=0; i<$('.insPoint2')[0].children.length; i++){
					$($('.insPoint2')[0].children[i]).delay(300*(i+1)).queue(function(){
					    $(this).addClass("visible animated fadeIn");
					    $(this).removeClass("hiddenHide");
					});
				}	
				if(!$('.dashedLine').eq(0).hasClass("animated")){
					$('.dashedLine').eq(0).addClass('visible animated fadeInUp');
					startTimer(0);
					startTimer(1);
				}
			}
			if(index == 5){
				$('.Topic').eq(2).addClass('visible animated fadeInUp');
				$('.Topic').eq(3).addClass('visible animated fadeInUp');
				
				for(var i=0; i<$('.insImg2').length; i++){
					$('.insImg2').eq(i).addClass('visible animated fadeInUp');
				}
				for(var i=0; i<$('.addText').length; i++){
					$('.addText').eq(i).delay(100*(i+1)).queue(function(){	
						$(this).addClass('visible animated fadeInUp');
					});
				}
				for(var i=0; i<$('.insPoint3')[0].children.length; i++){
					$($('.insPoint3')[0].children[i]).delay(400*(i+1)).queue(function(){
					    $(this).addClass("visible animated fadeIn");
					    $(this).removeClass("hiddenHide");
					});
				}
				for(var i=0; i<$('.insPoint4')[0].children.length; i++){
					$($('.insPoint4')[0].children[i]).delay(400*(i+1)).queue(function(){
					    $(this).addClass("visible animated fadeIn");
					    $(this).removeClass("hiddenHide");
					});
				}
				if(!$('.dashedLine').eq(1).hasClass("animated")){
					$('.dashedLine').eq(1).addClass('visible animated fadeInUp');
					startTimer(2);
					startTimer(3);
				}			
			}
			if(index == 6){
				for(var i=0; i<$('#text2')[0].children.length; i++){
					$($('#text2')[0].children[i]).delay(300*(i+2)).queue(function(){
						$(this).addClass("visible animated bounceIn");
					});
				}
				$('#topicLeft').addClass('visible animated fadeIn');
				$('#topicRight').addClass('visible animated fadeIn');
				$('#text1').addClass('visible animated fadeInUp');
			}
			if(index == 7){
				$('.Topic').eq(4).addClass('visible animated fadeInUp');
				for(var i=0; i<$('.clientBoard').length; i++){
					$('.clientBoard').eq(i).delay(100*i).queue(function(){
						$(this).addClass("visible animated bounceIn");
					});				
				}
			}
			if(index == 8){
				$('.Topic').eq(5).addClass('visible animated fadeInUp');
				$('.Topic').eq(6).addClass('visible animated fadeInUp');
			}
			if(index == 9){
				$('.Topic').eq(7).addClass('visible animated fadeInUp');
				$('.Topic').eq(8).addClass('visible animated fadeInUp');
				$('.contactBoard').addClass('visible animated fadeIn');
			}
			if(index == 10){
			    for (var i = 0; i < $(svgElem)[0].childNodes.length; i++) {
			        $($(svgElem)[0].childNodes[i]).delay(($(svgElem)[0].childNodes.length - 1) * 3 - i * 3).fadeIn();
			    }						
			}
			if(index == 11){
				player1.playVideo();
			}			
		},

		'onLeave': function(index, nextIndex, direction){
			if(index == 1){
				$(".navtopbar").addClass("opacityZero");
			}
			if(index == 11){
				player1.pauseVideo();
				player2.pauseVideo();
				player3.pauseVideo();
			}	
		}
	});	
}
function YoutubeAPI(){
	var tag = document.createElement('script');
	tag.src = "./script/youtubeAPI.js";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

var player1;
var player2;
var player3;
function onYouTubePlayerAPIReady(){
	player1 = new YT.Player('youtubeVideo1',{
		/*events:{
			'onReady': onPlayerReady
		}*/
	});
	player2 = new YT.Player('youtubeVideo2',{
	
	});
	player3 = new YT.Player('youtubeVideo3',{
	
	});
}

var videoId = 0;
function videoBtn(){		
	$( ".videoBtn" ).click(function(e) {
		if(videoId == $(this).attr('id'))
		return;
		
		videoId = $(this).attr('id');
		switch($(this).attr('id')){
			case '0':
				$("#videoCarousel").carousel(0);
				player1.playVideo();
				player2.pauseVideo();
				player3.pauseVideo();
			break;
			case '1':
				$("#videoCarousel").carousel(1);
				player2.playVideo();
				player1.pauseVideo();
				player3.pauseVideo();
			break;
			case '2':
				$("#videoCarousel").carousel(2);
				player3.playVideo();
				player2.pauseVideo();
				player1.pauseVideo();
			break;
		}
	});
}

function setVideoSize(){
	var width = $(window).width() * 90/100;
	var height = width*9/16 + "px";
	width += "px";
	$("#youtubeVideo1")[0].style.width = width;
	$("#youtubeVideo1")[0].style.height = height;	
	$("#youtubeVideo2")[0].style.width = width;
	$("#youtubeVideo2")[0].style.height = height;	
	$("#youtubeVideo3")[0].style.width = width;
	$("#youtubeVideo3")[0].style.height = height;	
}

function tickIconSvg(){
	for(var i=0; i<$(".tickIcon").length; i++){	
	    $(".tickIcon")[i].innerHTML = "<svg viewBox='0 0 128 128' width=20px height=20px>"+                                      
	                                  "<g><path fill='#2c4ff9' d='M60.194,126.5c-2.476-0.342-4.977-0.559-7.424-1.045c-22.434-4.458-38.284-17.231-47.465-38.12   c-4.281-9.74-5.75-20.076-4.536-30.635C3.18,35.709,13.466,19.561,31.481,8.51c10.846-6.654,22.784-9.399,35.472-8.889   c25.475,1.025,48.603,18.31,56.856,42.451c1.774,5.19,2.951,10.5,3.325,15.98c0.024,0.343,0.148,0.679,0.225,1.018   c0,2.644,0,5.288,0,7.933c-0.075,0.294-0.197,0.584-0.218,0.882c-0.455,6.638-1.877,13.072-4.533,19.16   c-9.159,20.998-24.974,33.853-47.464,38.388c-2.485,0.501-5.029,0.717-7.546,1.066C65.13,126.5,62.661,126.5,60.194,126.5z    M118.896,62.988C118.848,32.558,94.254,8.044,63.761,8.034C33.556,8.023,8.826,32.794,8.897,62.988   c0.071,30.482,24.687,55.087,55.065,55.042C94.299,117.984,118.942,93.292,118.896,62.988z'/>"+
	                                  "<path fill='#2c4ff9' d='M55.601,82.665c0.465-0.644,0.702-1.086,1.042-1.427c12.637-12.654,25.286-25.296,37.919-37.953   c1.235-1.237,2.582-1.969,4.371-1.474c2.859,0.791,3.953,4.124,2.102,6.431c-0.274,0.342-0.601,0.643-0.913,0.954   C86.265,63.06,72.38,76.896,58.576,90.811c-2.074,2.091-4.705,2.452-7.057-0.008c-5.115-5.345-10.43-10.498-15.661-15.732   c-2.042-2.044-2.19-4.723-0.371-6.563c1.818-1.84,4.538-1.716,6.563,0.306c4.051,4.047,8.101,8.094,12.14,12.153   C54.623,81.399,54.979,81.909,55.601,82.665z'/>"+
                                      "</g></svg>"
	}
}
function InfoIconSvg(){
	for(var i=0; i<$(".infoIcon").length; i++){		
	    $(".infoIcon")[i].innerHTML = "<svg viewBox='0 0 128 128' width=20px height=20px>" +
                                    "<g><path fill='#2c4ff9' d='M61.015,127.316c-2.476-0.342-4.976-0.559-7.424-1.045c-22.434-4.458-38.283-17.231-47.465-38.12   c-4.281-9.74-5.749-20.076-4.536-30.634c2.411-20.991,12.697-37.139,30.712-48.19c10.846-6.653,22.784-9.399,35.472-8.889   c25.474,1.025,48.603,18.31,56.856,42.45c1.774,5.19,2.951,10.5,3.325,15.98c0.023,0.343,0.148,0.679,0.225,1.018   c0,2.644,0,5.289,0,7.933c-0.075,0.294-0.197,0.585-0.218,0.882c-0.456,6.637-1.877,13.072-4.533,19.16   c-9.159,20.998-24.975,33.853-47.464,38.388c-2.486,0.501-5.029,0.717-7.545,1.065C65.951,127.316,63.483,127.316,61.015,127.316z    M119.717,63.804C119.67,33.374,95.075,8.86,64.582,8.85C34.378,8.839,9.647,33.61,9.718,63.804   c0.071,30.482,24.687,55.087,55.064,55.041C95.121,118.799,119.764,94.108,119.717,63.804z'/>"+
	                                "<line fill='none' stroke='#2c4ff9' stroke-width='19' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='64.68' y1='53.147' x2='64.68' y2='95.619'/>"+
	                                "<line fill='none' stroke='#2c4ff9' stroke-width='19' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='64.68' y1='34.004' x2='64.68' y2='37.306'/></g></svg>"
	}
}

function benfitsOnclick(num){
	if($(window).width() <= 550){
		switch(num){			
			case 0:
				$(".bSubText")[0].children[0].style.opacity = "1";
				$(".bSubText")[1].children[0].style.opacity= "0.3";
				$(".benfitsSlider")[0].style = "transform: translateX(0%);";
				$(".benfitsSlider")[0].style.webkitTransform = "translateX(0%)";
			break;	
			case 1:
				$(".bSubText")[1].children[0].style.opacity = "1";
				$(".bSubText")[0].children[0].style.opacity = "0.3";
				$(".benfitsSlider")[0].style = "transform: translateX(-50%);";
				$(".benfitsSlider")[0].style.webkitTransform = "translateX(-50%)";
			break;	
		}
	}
}
function insOnclick(num){
	if($(window).width() <= 768){
		switch(num){			
			case 0:
				$(".insText")[0].children[0].style.opacity = "1";
				$(".insText")[1].children[0].style.opacity= "0.3";
				$(".slidesContainer")[0].style = "transform: translateX(0%);";
				$(".slidesContainer")[0].style.webkitTransform = "translateX(0%)";
			break;	
			case 1:
				$(".insText")[1].children[0].style.opacity = "1";
				$(".insText")[0].children[0].style.opacity = "0.3";
				$(".slidesContainer")[0].style = "transform: translateX(-50%);";
				$(".slidesContainer")[0].style.webkitTransform = "translateX(-50%)";
			break;	
		}
	}
}
function addOnclick(num){
	if($(window).width() <= 768){
		switch(num){			
			case 0:
				$(".addText")[0].children[0].style.opacity = "1";
				$(".addText")[1].children[0].style.opacity= "0.3";
				$(".slidesContainer")[1].style = "transform: translateX(0%);";
				$(".slidesContainer")[1].style.webkitTransform = "translateX(0%)";
			break;	
			case 1:
				$(".addText")[1].children[0].style.opacity = "1";
				$(".addText")[0].children[0].style.opacity = "0.3";
				$(".slidesContainer")[1].style = "transform: translateX(-50%);";
				$(".slidesContainer")[1].style.webkitTransform = "translateX(-50%)";
			break;	
		}
	}
}

function infoText(e){
	for(var i=1; i< $(".faqTextInfo").length + 1; i++){
		var tmp = $("#faq"+i);
		tmp[0].style.height = "0px";
	}
	
	var obj = $("#"+e);
	if(obj[0].clientHeight > 1){
		var _h = 0;
	}else{
		var _h = obj[0].childNodes[1].clientHeight + 20;
	}
	obj[0].style.height = _h+"px";	
}

var featuresPointNum = 0;
function featurePoint(num){
	if(num == featuresPointNum){
		return;
	}
	clearInterval(featuresTimer);
	$($('.featuresPoint')[0].children[featuresPointNum]).removeClass("selected");
	$($('.featuresPoint')[0].children[num]).addClass("selected");
	featuresPointNum = num;
	
	$(".featuresChild").stop();
	var img1;
	var img2;
	
	switch(num){
		case 1:
			img1 = "url(./images/features/feature_paint_01.jpg)";
			img2 = "url(./images/features/feature_paint_02.jpg)";
		break;
		case 2:
			img1 = "url(./images/features/feature_specs_01.jpg)";
			img2 = "url(./images/features/feature_specs_02.jpg)";
		break;
		case 3:
			img1 = "url(./images/features/feature_specs_01.jpg)";
			img2 = "url(./images/features/feature_specs_01.jpg)";
		break;	
		case 4:
			img1 = "url(./images/features/feature_specs_01.jpg)";
			img2 = "url(./images/features/feature_specs_01.jpg)";
		break;	
		case 5:
			img1 = "url(./images/features/feature_specs_01.jpg)";
			img2 = "url(./images/features/feature_specs_01.jpg)";
		break;	
		case 6:
			img1 = "url(./images/features/feature_specs_01.jpg)";
			img2 = "url(./images/features/feature_specs_01.jpg)";
		break;	
		case 7:
			img1 = "url(./images/features/feature_specs_01.jpg)";
			img2 = "url(./images/features/feature_specs_01.jpg)";
		break;	
		case 8:
			img1 = "url(./images/features/feature_specs_01.jpg)";
			img2 = "url(./images/features/feature_specs_01.jpg)";
		break;	
		case 9:
			img1 = "url(./images/features/feature_specs_01.jpg)";
			img2 = "url(./images/features/feature_specs_01.jpg)";
		break;	
		case 10:
			img1 = "url(./images/features/feature_specs_01.jpg)";
			img2 = "url(./images/features/feature_specs_01.jpg)";
		break;	
		case 11:
			img1 = "url(./images/features/feature_cross_01.jpg)";
			img2 = "url(./images/features/feature_cross_02.jpg)";
		break;	
		case 12:
			img1 = "url(./images/features/feature_environment_01.jpg)";
			img2 = "url(./images/features/feature_environment_02.jpg)";
		break;	
	}	
	$(".featuresChild").animate({
		opacity: 0,		
	}, 300, function() {
		$('.featuresBoard1')[0].style.backgroundImage = img1;
		$(".featuresBoard2")[0].style.backgroundImage = img2;
		$(this).animate({
		opacity: 1,		
		}, 300);
	});	
	featuresTimer = setInterval(featuresNextImage,4000);
}
function featuresNextImage() {
	var x = featuresPointNum;
	x = (x == $('.featuresPoint')[0].children.length-1) ? 1 : featuresPointNum + 1;
	featurePoint(x);
}
function insPointNextImage(num) {
	var x = insNum[num];
	x = (x == $(".insPoint"+(num+1))[0].children.length) ? 1 : insNum[num]+1;
	InstallationBg((num+1),x);
}

var featuresTimer;
var installationTimer = [,,,,];
function startTimer(num) {
	setTimeout(function(){
	installationTimer[num] = setInterval(function(){insPointNextImage(num)}, 3000);
	},num*600);
}

var caseStudyNum = 1;
function caseStudyBg(num){
	if(caseStudyNum == num){
		return;	
	}
	caseStudyNum = num;
	
	$(".fill").removeClass("fill");
	var img;
	$($(".csArrow")[num-1]).addClass("fill");
	switch(num){
		case 1:
			img = "url(./images/configurator_background.png)";
		break;
		case 2:
			img = "url(./images/faq_background.jpg)";
		break;
		case 3:
			img = "url(./images/benefits_background.jpg)";
		break;
		case 4:
			img = "url(./images/clients_background.jpg)";
		break;
		case 5:
			img = "url(./images/contact_background.jpg)";
		break;	
	}
	$("#caseStudy").animate({
		opacity: 0,		
	}, 300, function() {
		$("#caseStudy")[0].style.backgroundImage = img;
		$("#caseStudy").animate({
		opacity: 1,		
		}, 200);
	});
}

var insNum = [1,1,1,1];
function InstallationBg(imgNum, num){
	var img = swicthInstallationImg(imgNum)[num-1] ;	
	if(insNum[(imgNum-1)] == num){
		return;	
	}
	clearInterval(installationTimer[imgNum-1]);
	$("#installationImg"+imgNum).stop();
	insNum[(imgNum-1)] = num;
	for(var i=0; i<$(".insPoint"+imgNum)[0].children.length; i++){
		$($(".insPoint"+imgNum)[0].children[i]).removeClass("selected");
	}
	$($(".insPoint"+imgNum)[0].children[num-1]).addClass("selected");
	$("#installationImg"+imgNum).animate({
		opacity: 0,		
	}, 300, function() {
		$("#installationImg"+imgNum)[0].src = img;
		$("#installationImg"+imgNum).animate({
		opacity: 1,		
		}, 200);
	});
	installationTimer[imgNum-1] = setInterval(function(){insPointNextImage(imgNum-1)}, 3000);
}

function swicthInstallationImg(num){
	var img;
	switch(num){
		case 1:
		img = ["images/Installation/Installation_4ktouch.jpg",
				"images/Installation/Installation_projection.jpg",
				"images/Installation/Installation_videowall.jpg"];
		break;
		
		case 2:
		img = ["images/Installation/Installation_tablet.jpg",
				"images/Installation/Installation_mobile.jpg"];
		break;
		
		case 3:
		img = ["images/Additional/Additional_touch.jpg",
				"images/Additional/Additional_gesture.jpg",
				"images/Additional/Additional_remote.jpg",
				"images/Additional/Additional_vr.jpg",
				"images/Additional/Additional_analytics.jpg"];
		break;
		case 4:
		img = ["images/Additional/Additional_ar.jpg",
				"images/Additional/Additional_vr.jpg",
				"images/Additional/Additional_analytics.jpg"];
		break;
	}
	
	return img;
}
function setHidden(){
	for(var i=0; i<$('.benfitTopic')[0].children.length; i++){
		$($('.benfitTopic')[0].children[i]).addClass("hiddenHide");
	}
	for(var i=0; i<$('.benfitsPoint1')[0].children.length; i++){
		$($('.benfitsPoint1')[0].children[i]).addClass("hiddenHide");
		$($('.benfitsPoint2')[0].children[i]).addClass("hiddenHide");
	}	
	for(var i=0; i<$('.featuresPoint')[0].children.length; i++){
		$($('.featuresPoint')[0].children[i]).addClass("hiddenHide");
	}
	$('.featuresBoard1').addClass("hiddenHide");
	$('.featuresBoard2').addClass("hiddenHide");
	
	for(var i=0; i<$('.clientBoard').length; i++){
		$('.clientBoard').eq(i).addClass("hiddenHide");
	}
	for(var i=0; i<$('.dashedLine').length; i++){
		$('.dashedLine').eq(i).addClass("hiddenHide");
	}
	for(var i=0; i<$('.insPoint1')[0].children.length; i++){
		$($('.insPoint1')[0].children[i]).addClass("hiddenHide");
	}
	for(var i=0; i<$('.insPoint2')[0].children.length; i++){
		$($('.insPoint2')[0].children[i]).addClass("hiddenHide");
	}
	for(var i=0; i<$('.insImg1').length; i++){
		$('.insImg1').eq(i).addClass("hiddenHide");
	}
	for(var i=0; i<$('.insImg2').length; i++){
		$('.insImg2').eq(i).addClass("hiddenHide");
	}
	for(var i=0; i<$('.insPoint3')[0].children.length; i++){
		$($('.insPoint3')[0].children[i]).addClass("hiddenHide");
	}
	for(var i=0; i<$('.insPoint4')[0].children.length; i++){
		$($('.insPoint4')[0].children[i]).addClass("hiddenHide");
	}
	for(var i=0; i<$('#text2')[0].children.length; i++){
		$($('#text2')[0].children[i]).addClass("hiddenHide");
	}
	for(var i=0; i<$('.Topic').length; i++){
		$('.Topic').eq(i).addClass("hiddenHide");
	}
	for(var i=0; i<$('.insText').length; i++){
		$('.insText').eq(i).addClass("hiddenHide");
	}
	for(var i=0; i<$('.addText').length; i++){
		$('.addText').eq(i).addClass("hiddenHide");
	}
	$('#topicLeft').addClass("hiddenHide");
	$('#topicRight').addClass("hiddenHide");
	$('.contactBoard').addClass("hiddenHide");
	$('#text1').addClass("hiddenHide");
	$('.bSubText').addClass("hiddenHide");
}