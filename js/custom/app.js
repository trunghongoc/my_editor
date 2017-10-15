function getIframeSize(){
    var result_height = document.getElementById("preview").offsetHeight;
    var result_width = document.getElementById("preview").offsetWidth;
    $("#result_width").text(result_width)
    $("#result_height").text(result_height)
}

$(document).ready(function(){
    getIframeSize()
    window.addEventListener("resize", getIframeSize)

    var typed6 = new Typed('#title', {
        strings: ['angularjs: Two-way Binding'],
        typeSpeed: 60,
        backSpeed: 10,
        loop: false
    });
})