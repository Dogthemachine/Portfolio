$(document).ready(function() {

    $('body').css({"background": "linear-gradient(#BEBEBE, #A9A9A9, #BEBEBE)"});

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