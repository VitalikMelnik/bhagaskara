/**
 * Created by vitalik on 25.11.16.
 */
$(document).ready(function () {

    var menu = $('.menu');
    var origOffsetY = menu.offset().top;

    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.menu').addClass('sticky');
            
        } else {
            $('.menu').removeClass('sticky');
            
        }


    }

    document.onscroll = scroll;

});


