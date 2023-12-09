
document.getElementById("arrowbtn").style.display = "none";

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280) {
        document.getElementById("arrowbtn").style.display = "block";
    } else {
        document.getElementById("arrowbtn").style.display = "none";
    }
}


function back_top_function() {
    $('a.scroll-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 });
    });
}