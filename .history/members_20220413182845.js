//make the background color of the body change when the page scrolls down
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('body').addClass('scroll');
        } else {
            $('body').removeClass('scroll');
        }
    });
});