//make the background of the page change color when scrolling
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $("body").addClass("scrolled");
    } else {
        $("body").removeClass("scrolled");
    }
});