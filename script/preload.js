var progress = setInterval(function () {
    var $bar = $("#bar");
    if ($bar.width() >= 200) {
        clearInterval(progress);
    } else {
        $bar.width($bar.width() + 20);
    }
    $bar.text($bar.width() / 2 + "%");
    if ($bar.width() / 2 == 100){
      $bar.text("Still working ... " + $bar.width() / 2 + "%");
    }
}, 800);
$(window).load(function() {
  $(".loader").delay(500).fadeOut();
});