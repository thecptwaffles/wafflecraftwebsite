//make the background of the page change between set colors when the user scrolls the page down

$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $("body").addClass("change-bg");
        } else {
            $("body").removeClass("change-bg");
        }
    });
});