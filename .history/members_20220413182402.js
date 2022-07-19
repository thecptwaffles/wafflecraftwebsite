//make the background change color on scroll
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("#ol").addClass("scrolled");
    } else {
        $("#ol").removeClass("scrolled");
    }
});