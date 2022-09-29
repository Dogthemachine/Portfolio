$(document).ready(function() {


//-----------    CHANGE VIDEO     -----------

    const horizontal_vid = document.getElementById('horizontal_vid');
    const vertical_vid = document.getElementById('vertical_vid');

    if (window.innerHeight > window.innerWidth) {
        horizontal_vid.remove();
    } else {
        vertical_vid.remove();
    };

//-----------   CHANGE VIDEO     -----------


});