$(document).ready(function() {

//-----------    CHANGE VIDEO     -----------
    const horizontal_vid = document.getElementById('horizontal_vid');
    const vertical_vid = document.createElement('video');
    vertical_vid.innerHTML = '<video playsinline autoplay muted loop poster="reel.jpg" id="vertical_vid"><source src="{{ STATIC_URL }}img/reel_v.webm" type="video/webm"><source src="{{ STATIC_URL }}img/reel_v.mp4" type="video/mp4"><source src="{{ STATIC_URL }}img/reel_v.ogv" type="video/ogv"></video>';

    if (window.innerHeight > window.innerWidth) {
        horizontal_vid.parentNode.replaceChild(vertical_vid, horizontal_vid);
    };
//-----------   CHANGE VIDEO     -----------


});