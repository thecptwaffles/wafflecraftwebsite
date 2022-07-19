//make the background color of the member page change when the mouse is over the background
$(document).ready(function () {
    $(".member-background").mouseover(function () {
        $(this).css("background-color", "rgba(0,0,0,0.5)");
    });
    $(".member-background").mouseout(function () {
        $(this).css("background-color", "rgba(0,0,0,0.2)");
    });
});