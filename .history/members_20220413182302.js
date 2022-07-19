//make the background change color on scroll
$(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 50) {
                $("#navbar").addClass("scrolled");
            } else {
                $("#navbar").removeClass("scrolled");
            }
        }