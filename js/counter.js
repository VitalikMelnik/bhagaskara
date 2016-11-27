/**
 * Created by vitalik on 27.11.16.
 */
var a = 0;
$(window).scroll(function() {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },

                {

                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        if(this.countNum==98){
                            $this.text(this.countNum+'%');
                        }
                        else if (this.countNum==1642){
                            $this.text('1,642');
                        } else {
                            $this.text(this.countNum);
                        }
                        //console.log('finished');
                    }

                });
        });
        a = 1;
    }

});