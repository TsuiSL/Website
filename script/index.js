$(document).ready(function(){	
	if($(window).width() > 769){
		$('#index')[0].style.display = "block";
	}else{
		$('#index')[0].style.display = "none";
	}
});

$(window).load(function() {
	$('#fullpage').fullpage({
		'verticalCentered': false,
		'css3': true,
		'navigation': false,
		'navigationPosition': 'right',

		'afterLoad': function(anchorLink, index){
			if($(window).width() <= 769){
				if(index == 1){				
					$(".caption")[3].style.opacity = "0.6";
					$(".caption")[3].style.backgroundColor = "#2c4ff9";
					$(".icon")[3].style.opacity = "1";
					$(".icon")[3].style.transform = "scale3d(1.05,1.05,1)";
					$(".icon")[3].style.webkitTransform = "scale3d(1.05,1.05,1)";
					
					$(".borderBottom")[3].style.opacity = "1";
					$(".borderBottom")[3].style.width = "100%";
					$(".borderBottom2")[3].style.opacity = "1";
					$(".borderBottom2")[3].style.width = "100%";
					
					$(".h3")[0].style.opacity = "1";
					$(".h3")[0].style.transform = "translateY(0px)";
					$(".h3")[0].style.webkitTransform = "translateY(0px)";
					$(".h5")[0].style.opacity = "1";
					$(".h5")[0].style.transform = "translateY(0px)";
					$(".h5")[0].style.webkitTransform = "translateY(0px)";
				}
				
				if(index == 2){
					$(".caption")[4].style.opacity = "0.6";
					$(".caption")[4].style.backgroundColor = "#2c4ff9";
					$(".icon")[4].style.opacity = "1";
					$(".icon")[4].style.transform = "scale3d(1.05,1.05,1)";
					$(".icon")[4].style.webkitTransform = "scale3d(1.05,1.05,1)";
					
					$(".borderBottom")[4].style.opacity = "1";
					$(".borderBottom")[4].style.width = "100%";
					$(".borderBottom2")[4].style.opacity = "1";
					$(".borderBottom2")[4].style.width = "100%";
					
					$(".h3")[1].style.opacity = "1";
					$(".h3")[1].style.transform = "translateY(0px)";
					$(".h3")[1].style.webkitTransform = "translateY(0px)";
					$(".h5")[1].style.opacity = "1";
					$(".h5")[1].style.transform = "translateY(0px)";
					$(".h5")[1].style.webkitTransform = "translateY(0px)";
				}
				
				if(index == 3){
					$(".caption")[5].style.opacity = "0.6";
					$(".caption")[5].style.backgroundColor = "#2c4ff9";
					$(".icon")[5].style.opacity = "1";
					$(".icon")[5].style.transform = "scale3d(1.05,1.05,1)";
					$(".icon")[5].style.webkitTransform = "scale3d(1.05,1.05,1)";
					
					$(".borderBottom")[5].style.opacity = "1";
					$(".borderBottom")[5].style.width = "100%";
					$(".borderBottom2")[5].style.opacity = "1";
					$(".borderBottom2")[5].style.width = "100%";
					
					$(".h3")[2].style.opacity = "1";
					$(".h3")[2].style.transform = "translateY(0px)";
					$(".h3")[2].style.webkitTransform = "translateY(0px)";
					$(".h5")[2].style.opacity = "1";
					$(".h5")[2].style.transform = "translateY(0px)";
					$(".h5")[2].style.webkitTransform = "translateY(0px)";
				}
			}
		},

		'onLeave': function(index, nextIndex, direction){
			if($(window).width() <= 769){
				if(index == 1){				
					$(".caption")[3].removeAttribute("style");
					$(".icon")[3].removeAttribute("style");					
					$(".borderBottom")[3].removeAttribute("style");
					$(".borderBottom2")[3].removeAttribute("style");					
					$(".h3")[0].removeAttribute("style");				
					$(".h5")[0].removeAttribute("style");
				}
				
				if(index == 2){
					$(".caption")[4].removeAttribute("style");
					$(".icon")[4].removeAttribute("style");					
					$(".borderBottom")[4].removeAttribute("style");
					$(".borderBottom2")[4].removeAttribute("style");					
					$(".h3")[1].removeAttribute("style");				
					$(".h5")[1].removeAttribute("style");
				}
				
				if(index == 3){
					$(".caption")[5].removeAttribute("style");
					$(".icon")[5].removeAttribute("style");					
					$(".borderBottom")[5].removeAttribute("style");
					$(".borderBottom2")[5].removeAttribute("style");					
					$(".h3")[2].removeAttribute("style");				
					$(".h5")[2].removeAttribute("style");
				}
			}
		}
	});	
});

$(window).resize(function(){	
	if($(window).width() > 769){
		$('#index')[0].style.display = "block";
	}else{
		$('#index')[0].style.display = "none";
	}
});