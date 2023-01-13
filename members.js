//make the background change color when the page is scrolled down or up 
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
        $("body").addClass("scrolled");
    } else {
        $("body").removeClass("scrolled");
    }
});