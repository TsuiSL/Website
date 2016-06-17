$( document ).ready(function() {
    console.log( "ready!" );
});
$(window).load(function() {
	if ($(window).width() > 768) {
        $("#fullpage").remove();
    } else {
        $("#page1").remove();
        FullPageFunc();
    }
    setHidden();
    $(this).delay(500).queue(function() {
        Animate();
        console.log("loaded");
    });
    var maxWidth = $(window).height() / $("#galleryMaxWidth").height() * 100 - 1;
    $("#galleryMaxWidth")[0].style.maxWidth = maxWidth + "%";
	$('.homeBtn').click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveTo(1);
	});
});
$(window).resize(function() {
    var maxWidth = $(window).height() / $("#galleryMaxWidth").height() * 100 - 1;
    if (maxWidth < 100) $("#galleryMaxWidth")[0].style.maxWidth = maxWidth + "%";
});

function header() {
    var html;
    $.get("./header.html"),
        function(data) {
            html = $(data).find("#navbar").html();
            console.log(html);
        }
}

function setHidden() {
    $('#keyVisualScreen').addClass("hiddenHide");
    $('#keyVisualLeft').addClass("hiddenHide");
    $('#keyVisualRight').addClass("hiddenHide");
    $('#keyVisual360').addClass("hiddenHide");
    $('#keyVisualOculus').addClass("hiddenHide");
}

function Animate() {
    $('#keyVisualScreen').viewportChecker({
        classToAdd: 'visible animated fadeInDownBig',
        offset: 100,
        callbackFunction: function() {
            $('#keyVisualOculus').delay(2000).queue(function() {
                $(this).addClass('visible animated fadeInUp');
            });
        }
    });
    $('#keyVisualLeft').viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 100,
        delay: 800
    });
    $('#keyVisualRight').viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 100,
        delay: 900
    });
    $('#keyVisual360').viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100,
        delay: 1600
    });
}

function FullPageFunc() {
    $('#fullpage').fullpage({
		'verticalCentered': false,
		'css3': true,
		'navigation': true,
        'afterLoad': function(anchorLink, index) {
            if ($(window).width() <= 769) {
				if(index == 1){
					$(".navtopbar").removeClass("opacityZero");
					$('.homeBtn')[0].style.opacity = "0";
				}else{
					$('.homeBtn')[0].style.opacity = "1";
				}
                if (index == 2) {
                    $(".caption")[0].style.opacity = "0.6";
                    $(".caption")[0].style.backgroundColor = "#2c4ff9";
                    $(".introTextLayer")[0].childNodes[1].style.opacity = "1";
                    $(".introTextLayer")[0].childNodes[3].style.opacity = "1";
                    $(".introTextLayer")[0].childNodes[3].style.transform = "translateX(0px)";
                    $(".ComingSoon")[0].style.opacity = "1";
                }
                if (index == 3) {
                    $(".caption")[1].style.opacity = "0.6";
                    $(".caption")[1].style.backgroundColor = "#2c4ff9";
                    $(".introTextLayer")[1].childNodes[1].style.opacity = "1";
                    $(".introTextLayer")[1].childNodes[3].style.opacity = "1";
                    $(".introTextLayer")[1].childNodes[3].style.transform = "translateX(0px)";
                }
                if (index == 4) {
                    $(".caption")[2].style.opacity = "0.6";
                    $(".caption")[2].style.backgroundColor = "#2c4ff9";
                    $(".introTextLayer")[2].childNodes[1].style.opacity = "1";
                    $(".introTextLayer")[2].childNodes[3].style.opacity = "1";
                    $(".introTextLayer")[2].childNodes[3].style.transform = "translateX(0px)";
                    $(".ComingSoon")[1].style.opacity = "1";
                }
                if (index == 5) {
                    $(".caption")[3].style.opacity = "0.6";
                    $(".caption")[3].style.backgroundColor = "#2c4ff9";
                    $(".introTextLayer")[3].childNodes[1].style.opacity = "1";
                    $(".introTextLayer")[3].childNodes[3].style.opacity = "1";
                    $(".introTextLayer")[3].childNodes[3].style.transform = "translateX(0px)";
                    $(".ComingSoon")[2].style.opacity = "1";
                }
                if (index == 6) {
                    for (var i = 0; i < $(svgElem)[0].childNodes.length; i++) {
                        $($(svgElem)[0].childNodes[i]).delay(($(svgElem)[0].childNodes.length - 1) * 3 - i * 3).fadeIn();
                    }
                }
            }
        },
        'onLeave': function(index, nextIndex, direction) {
            if ($(window).width() <= 769) {
				if(index == 1){
					$(".navtopbar").addClass("opacityZero");
				}
                if (index == 2) {
                    $(".caption")[0].removeAttribute("style");
                    $(".introTextLayer")[0].childNodes[1].removeAttribute("style");
                    $(".introTextLayer")[0].childNodes[3].removeAttribute("style");
                    $(".ComingSoon")[0].removeAttribute("style");
                }
                if (index == 3) {
                    $(".caption")[1].removeAttribute("style");
                    $(".introTextLayer")[1].childNodes[1].removeAttribute("style");
                    $(".introTextLayer")[1].childNodes[3].removeAttribute("style");
                }
                if (index == 4) {
                    $(".caption")[2].removeAttribute("style");
                    $(".introTextLayer")[2].childNodes[1].removeAttribute("style");
                    $(".introTextLayer")[2].childNodes[3].removeAttribute("style");
                    $(".ComingSoon")[1].removeAttribute("style");
                }
                if (index == 5) {
                    $(".caption")[3].removeAttribute("style");
                    $(".introTextLayer")[3].childNodes[1].removeAttribute("style");
                    $(".introTextLayer")[3].childNodes[3].removeAttribute("style");
                    $(".ComingSoon")[2].removeAttribute("style");
                }
            }
        }
    });
}