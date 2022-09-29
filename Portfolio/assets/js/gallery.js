$(document).ready(function() {

//    $('body').css("background", "None");

    $('.fit-photo').on('click', function(){
            $(this).css('width','100%');
            $(this).css('height','auto');
    });

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

//-----------   FIT PHOTO HEIGHT TO WIDTH     -----------

//-----------   RESIZE PHOTO ON CLICK AND BACK     -----------

    for (i = 0; i < all_photos.length; i++) {
        all_photos[i].addEventListener("click", function() {


            if (this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
            this.classList.add('active')}
    })};

//-----------   RESIZE PHOTO ON CLICK AND BACK     -----------

});