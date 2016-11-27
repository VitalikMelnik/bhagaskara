/**
 * Created by vitalik on 27.11.16.
 */

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 50,
    nav: false,

    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        },
        1400:{
            items: 3
        },
        2000:{
            items: 5
        }
    }


});

owl = $('.owl-carousel').owlCarousel();
$(".button__prev").click(function() {
    owl.trigger('prev.owl.carousel');
});

$(".button__next").click(function() {
    owl.trigger('next.owl.carousel');
});