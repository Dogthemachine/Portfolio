$(document).ready(function() {

    $('body').css({"background": "linear-gradient(#696969, #888888, #696969)"});

//-----------    MOVE TOP LINKS     -----------

    $( window ).on('scroll', function(){
        var scrollTop = $(this).scrollTop();
        $("#top-left").css({
            transform: 'translateX('+  ( -1 * scrollTop ) +'px)',
            });
        $("#top-right").css({
            transform: 'translateX('+  ( 1 * scrollTop ) +'px)',
            });
    });

//-----------    MOVE TOP LINKS     -----------


});