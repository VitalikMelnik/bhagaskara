/**
 * Created by vitalik on 27.11.16.
 */

$( window ).scroll(function() {
    var prog_bar = $('#progress-barr').offset().top - window.innerHeight;
    if($( window ).scrollTop() > prog_bar){
        $(".progress-bar").each(function(){
            each_bar_width = $(this).attr('aria-valuenow');
            $(this).width(each_bar_width + '%');
        });

    }
});