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

//-----------    FIT PHOTO HEIGHT TO WIDTH     -----------

    var all_photos = document.getElementsByClassName("fit-photo");

    $('.fit-photo').css({
        'height':$(this).parent().width()
        });

    for (i = 0; i < all_photos.length; i++) {
        all_photos[i].addEventListener("click", function() {
            console.log('click!', this);
    })};

//-----------   FIT PHOTO HEIGHT TO WIDTH     -----------

});