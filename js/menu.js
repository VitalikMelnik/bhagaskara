/**
 * Created by vitalik on 25.11.16.
 */
$(document).ready(function() {

    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the
        //nav bar to stick.
        //console.log($(window).scrollTop())
        if ($(window).scrollTop() > 1190) {
            $('#nav_bar').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < 1190) {
            $('#nav_bar').removeClass('navbar-fixed');
        }
        
    });
    
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
});
