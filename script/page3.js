$(document).ready(function(){
	setHidden();
});
$(window).load(function() {
	$(this).delay(1500).queue(function(){
			Animate();
			console.log("loaded");
		}
	);
});
$(window).resize(function(){	
	
});

function header(){
	
}

function setHidden(){
	$(".BoxDiv").addClass("hiddenHide");
}
function Animate(){
	for(var i=0; i<$(".BoxDiv").length; i++){
		$($('.BoxDiv')[i]).viewportChecker({
			classToAdd: 'visible animated fadeIn',
			offset: 100,
			delay:150*i,
			callbackFunction:function(){
				
			}
		});			
	}
	$(this).clearQueue();
	$(this).delay(800).queue(function(){
		for(var i=0; i<$(".BoxDiv").length; i++){
			$($('.BoxDiv')[i]).removeClass('fadeIn');
		}		
	});
}
var isOpen = false;
var animate = false;
function BoxOnClick(id){
	if(!animate){
		animate = true;
		var delayTime = 2500;
		if(!isOpen){		
			switchText(id);
			setEnterUrl(id);	
			for(var i=0; i<$(".BoxDiv").length; i++){
				$($(".BoxDiv")[i]).clearQueue();
				var num = ($(".BoxDiv").length-i-1)*100;			
				if(i != id){				
					$(".BoxDiv")[i].style.opacity = 0;	
					$($(".BoxDiv")[i]).delay(300).queue(function() {
						this.style.width = "0%";					
					});		
				}
			}
			$($(".BoxDiv")[id]).delay(800).queue(function() {
				$($(".boxDetailLayer")[id]).clearQueue();	
				$($(".boxDetailLayer")[id]).delay(500).queue(function(){	
					$(".boxTextLayer")[0].style.opacity = "1";
		
					this.style.height = "auto";
					$($(".boxDetailImg")[id]).children(0)[0].style.right = "0%";					
					$($(".boxLogoLayer")[id]).clearQueue();
					$($(".boxLogoLayer")[id]).delay(500).queue(function(){	
						this.style.opacity = 1;				
						this.style.top = "100%";
						isOpen = true;
					});	
				});			
				$(".boxDetailLayer")[id].style.width = "50%";		
				this.style.width = "32%";
			});	
			$($(".boxEnter")[0]).clearQueue();
			$($(".boxEnter")[0]).delay(2300).queue(function(){
				this.style.height = "50px";
			});
		}else{		
			$(".boxTextLayer")[0].style.opacity = "0";
			$(".boxLogoLayer")[id].removeAttribute("style");
			$($(".boxDetailImg")[id]).clearQueue();
			$($(".boxDetailImg")[id]).delay(300).queue(function(){
				$($(".boxDetailImg")[id]).children(0)[0].style.right = "100%";
			});		
			$(".boxEnter")[0].removeAttribute("style");
			for(var i=0; i<$(".BoxDiv").length; i++){
				$($(".BoxDiv")[i]).clearQueue();
				var delayTime = 1300;
				if(i == id){
					delayTime = 800;
				}
				$($(".BoxDiv")[i]).delay(delayTime).queue(function(){
					$(".boxDetailLayer")[id].removeAttribute("style");
					this.removeAttribute("style");					
				});			
				isOpen = false;
			}
			delayTime = 1500;
		}
		$(this).clearQueue();
		$(this).delay(delayTime).queue(function(){
			animate = false;
		});
	}
}

function switchText(id){
	switch(id){
		case 0:
			document.getElementById("topicText").innerHTML = "FrameFeed";
			document.getElementById("contentText").innerHTML = "Spice up your Events and boost your Social Media presence";
		break;
		
		case 1:
			document.getElementById("topicText").innerHTML = "Audio Wave Interaction";
			document.getElementById("contentText").innerHTML = "A Unique and Interactive VJ solution for Events, Music Artists and Venues.";
		break;
		
		case 2:
			document.getElementById("topicText").innerHTML = "360 INTERACTIVE";
			document.getElementById("contentText").innerHTML = "360 INTERACTIVE";
		break;
		
		case 3:
			document.getElementById("topicText").innerHTML = "360 INTERACTIVE";
			document.getElementById("contentText").innerHTML = "360 INTERACTIVE";
		break;	
	}
}

function setEnterUrl(id){
	switch(id){
	case 0:
		$("#enterUrl").attr("href", "http://www.ff.vz777.com/#DownloadSection");
	break;	
	case 1:
		$("#enterUrl").attr("href", "http://awi.vz777.com/");
	break;	
	case 2:
		$("#enterUrl").attr("href", "http://vz777.com/");
	break;	
	case 3:
		$("#enterUrl").attr("href", "http://vz777.com/");
	break;	
	}
}