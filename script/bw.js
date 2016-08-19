$(document).ready(function() {
    check();
});
$(window).load(function() {
    $('.homeBtn').click(function(e) {
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
    videoBtn();
    setVideoSize();
});
$(window).resize(function() {
    setVideoSize();    
});

function FullPageFunc() {
    var firstTime = true;
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': true,
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['HOME', 'VIDEO', 'CASESTUDY', 'CLIENTS', 'INTERESTED', 'FOOTER'],
        'afterLoad': function(anchorLink, index) {
            if (index == 1) {
                $(".navtopbar").removeClass("opacityZero");
                $('.homeBtn')[0].style.opacity = "0";
            } else {
                $('.homeBtn')[0].style.opacity = "1";
            }
            if (index == 2) {
                switch (videoId) {
                    case '0':
                        player1.playVideo();
                        break;
                }
            }
            if (index == 3) {
                for (var i = 0; i < $('#text2')[0].children.length; i++) {
                    $($('#text2')[0].children[i]).delay(300 * (i + 2)).queue(function() {
                        $(this).addClass("visible animated bounceIn");
                    });
                }
                $('#topicLeft').addClass('visible animated fadeIn');
                $('#topicRight').addClass('visible animated fadeIn');
                $('#text1').addClass('visible animated fadeInUp');
            }
            if (index == 4) {
                $('.Topic').eq(0).addClass('visible animated fadeInUp');
                for (var i = 0; i < $('.bwIcon').length; i++) {
                    $('.bwIcon').eq(i).delay(100 * i).queue(function() {
                        $(this).addClass("visible animated bounceIn");
                    });
                }
            }
            if (index == 5) {
                $('.Topic').eq(1).addClass('visible animated fadeInUp');
                $('.Topic').eq(2).addClass('visible animated fadeInUp');
                $(".TopicText").addClass('visible animated fadeInUp');
                $('.contactBoard').addClass('visible animated fadeIn');
            }
            if (index == 6) {
                for (var i = 0; i < $(svgElem)[0].childNodes.length; i++) {
                    $($(svgElem)[0].childNodes[i]).delay(($(svgElem)[0].childNodes.length - 1) * 3 - i * 3).fadeIn();
                }
            }
        },
        'onLeave': function(index, nextIndex, direction) {
            if (index == 1) {
                $(".navtopbar").addClass("opacityZero");
            }
            if (index == 2) {
                player1.pauseVideo();
            }
        }
    });
}

function YoutubeAPI() {
    var tag = document.createElement('script');
    tag.src = "./script/youtubeAPI.js";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
var player1;

function onYouTubePlayerAPIReady() {
    player1 = new YT.Player('youtubeVideo1', {});
}
var videoId = '0';

function videoBtn() {
    $(".videoBtn").click(function(e) {
        if (videoId == $(this).attr('id')) return;
        videoId = $(this).attr('id');
        switch ($(this).attr('id')) {
            case '0':
                $("#videoCarousel").carousel(0);
                player1.playVideo();
                break;
        }
    });
}

function setVideoSize() {
    var width = $(window).width() * 70 / 100;
    var height = width * 9 / 16 + "px";
    width += "px";
    $("#youtubeVideo1")[0].style.width = width;
    $("#youtubeVideo1")[0].style.height = height;
}

function tickIconSvg() {
    for (var i = 0; i < $(".tickIcon").length; i++) {
        $(".tickIcon")[i].innerHTML = "<svg viewBox='0 0 128 128' width=20px height=20px>" + "<g><path fill='#2c4ff9' d='M60.194,126.5c-2.476-0.342-4.977-0.559-7.424-1.045c-22.434-4.458-38.284-17.231-47.465-38.12   c-4.281-9.74-5.75-20.076-4.536-30.635C3.18,35.709,13.466,19.561,31.481,8.51c10.846-6.654,22.784-9.399,35.472-8.889   c25.475,1.025,48.603,18.31,56.856,42.451c1.774,5.19,2.951,10.5,3.325,15.98c0.024,0.343,0.148,0.679,0.225,1.018   c0,2.644,0,5.288,0,7.933c-0.075,0.294-0.197,0.584-0.218,0.882c-0.455,6.638-1.877,13.072-4.533,19.16   c-9.159,20.998-24.974,33.853-47.464,38.388c-2.485,0.501-5.029,0.717-7.546,1.066C65.13,126.5,62.661,126.5,60.194,126.5z    M118.896,62.988C118.848,32.558,94.254,8.044,63.761,8.034C33.556,8.023,8.826,32.794,8.897,62.988   c0.071,30.482,24.687,55.087,55.065,55.042C94.299,117.984,118.942,93.292,118.896,62.988z'/>" + "<path fill='#2c4ff9' d='M55.601,82.665c0.465-0.644,0.702-1.086,1.042-1.427c12.637-12.654,25.286-25.296,37.919-37.953   c1.235-1.237,2.582-1.969,4.371-1.474c2.859,0.791,3.953,4.124,2.102,6.431c-0.274,0.342-0.601,0.643-0.913,0.954   C86.265,63.06,72.38,76.896,58.576,90.811c-2.074,2.091-4.705,2.452-7.057-0.008c-5.115-5.345-10.43-10.498-15.661-15.732   c-2.042-2.044-2.19-4.723-0.371-6.563c1.818-1.84,4.538-1.716,6.563,0.306c4.051,4.047,8.101,8.094,12.14,12.153   C54.623,81.399,54.979,81.909,55.601,82.665z'/>" + "</g></svg>"
    }
}

function setHidden() {    
    for (var i = 0; i < $('.bwIcon').length; i++) {
        $('.bwIcon').eq(i).addClass("hiddenHide");
    }
    for (var i = 0; i < $('#text2')[0].children.length; i++) {
        $($('#text2')[0].children[i]).addClass("hiddenHide");
    }
    for (var i = 0; i < $('.Topic').length; i++) {
        $('.Topic').eq(i).addClass("hiddenHide");
    }
    for (var i = 0; i < $('.insText').length; i++) {
        $('.insText').eq(i).addClass("hiddenHide");
    }  
    $('#topicLeft').addClass("hiddenHide");
    $('#topicRight').addClass("hiddenHide");
    $('.contactBoard').addClass("hiddenHide");
    $('#text1').addClass("hiddenHide");
    $(".TopicText").addClass("hiddenHide");
}

function check() {
    document.getElementById("submitBtn").addEventListener("click", myFunction);
    $("#fname").focusout(function(e) {
        var _n = document.forms["myForm"]["name"].value;
    });
    $("#femail").focusout(function(e) {
        var _e = document.forms["myForm"]["email"].value;
    });
    $("#fmsg").focusout(function(e) {
        var _m = document.forms["myForm"]["message"].value;
    });
}
function myFunction() {
    var _n = document.forms["myForm"]["name"].value;
    var _e = document.forms["myForm"]["email"].value;
    var _m = document.forms["myForm"]["message"].value;

    if (_n != null && _n != "" &&
        _e != null && _e != "" &&
        _m != null && _m != "") {

        var emailRegEx = /^[A-Z0-9._%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,4}$/i;
        if (_e.search(emailRegEx) === -1) {
            $("#femail").addClass('error');
            return;
        } else {
            $("#femail").removeClass("error");
        }
        var xmlhttp;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        $.post("sendMail.php", {
            name: _n,
            email: _e,
            message: _m
        });
        //$.get("./sendMail.php");
        document.getElementById("myForm").submit();
    } else {
        if (_n == null || _n == "") {
            $("#fname").addClass("error");
        } else
            $("#fname").removeClass("error");

        if (_e == null || _e == "") {
            $("#femail").addClass("error");
        } else
            $("#femail").removeClass("error");

        if (_m == null || _m == "") {
            $("#fmsg").addClass("error");
        } else
            $("#fmsg").removeClass("error");
        return false;
    }
}