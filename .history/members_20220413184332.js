//make the background of the page change color every 5 seconds
var color = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"];
var i = 0;
setInterval(function () {
    document.body.style.backgroundColor = color[i];
    i = (i + 1) % color.length;
}, 5000);