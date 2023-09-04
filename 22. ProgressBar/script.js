window.onscroll = function() {scroll()};
function scroll(){
    var windowsScrolled = document.body.scrollTop || document.documentElement.scrollTop;
    var scrolledHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    var totalScrolled = (windowsScrolled/scrolledHeight)*100 ;
    document.getElementById("Bar").style.width = totalScrolled + "%" ;
}
