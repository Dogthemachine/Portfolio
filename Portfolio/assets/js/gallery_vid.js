$(document).ready(function() {

//    $('body').css("background", "None");

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

//-----------    CHANGE COLUMNS     -----------

    if (window.innerHeight > window.innerWidth) {
        $('.grid').css({
            'display': 'block',
            'margin-top': '10%'
            });
        $('.grid').css({
            'margin-top': '17%'
            });

        } else {
            $('.grid').classList.add('mb-3 mt-3');
        };

//-----------   CHANGE COLUMNS     -----------

});