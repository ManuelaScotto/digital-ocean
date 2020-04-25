$(document).ready(
   function() {
       $('.next').click(
           function() {
               clickNext();
           });

        $('.prev').click(
            function() {
            clickPrev();
            });

    $(document).keydown (
        function () {
            if (event.keyCode == 39) {
                clickNext();
            } else if (event.keyCode == 37) {
                clickPrev();
            }
        });


// ------------------FUNCTION----------------------

    function clickNext() {
        var imgActive = $('.designed img.active');
        var imgNext = imgActive.next();
        var imgLast = $('.designed .slider img').last();
        var imgFIrst = $('.designed .slider img').first();
        var circleActive = $('.designed .list-inline li  i.active');
        var circleNext = circleActive.next();
        var circleLast = $('.last');
        var circleFirst = $('.first');
        if (imgLast.hasClass('active') == true || circleLast.hasClass('active') == true) {
            imgLast.removeClass('active');
            imgFIrst.addClass('active');
            circleLast.removeClass('active');
            circleFirst.addClass('active');
        } else {
            imgActive.removeClass('active');
            imgNext.addClass('active');
            circleActive.removeClass('active');
            circleNext.addClass('active');
        }
    };
 
    function clickPrev() {
        var imgActive = $('.designed img.active');
        var imgPrev = imgActive.prev();
        var imgLast = $('.designed .slider img').last();
        var imgFirst = $('.designed .slider img').first();
        var circleActive = $('.designed .list-inline li  i.active');
        var circlePrev = circleActive.prev();
        var circleLast = $('.designed .list-inline i').last();
        var circleFirst = $('.designed .list-inline i').first();
        if (imgFirst.hasClass('active') == true || circleFirst.hasClass('active') == true) {
            imgFirst.removeClass('active');
            imgLast.addClass('active');
            circleFirst.removeClass('active');
            circleLast.addClass('active');
        } else {
            imgActive.removeClass('active');
            imgPrev.addClass('active');
            circleActive.removeClass('active');
            circlePrev.addClass('active');
        }
    };
});