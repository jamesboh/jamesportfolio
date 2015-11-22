(function ($, window, document, undefined) {

  'use strict';

  $(function () {

    //counters
    var i = 0;
    var h = 0;

    //functions
    var deleteSorry = function() {
      var str = $('#message-row .capsplz').text();
      str = str.substring(0, str.length - 1);
      $('#message-row .capsplz').text(str);      
    }

    $(window).scroll(function() {

      // background animation
      var scrolled = $(window).scrollTop();
      $('#bg-2').css('top',-(scrolled*0.3)+'px');

      // typing animation
      var bottom_of_object = $('#message-row .capsplz').offset().top + $('#message-row .capsplz').outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if( bottom_of_window > bottom_of_object && h==0 ){
        for (i = 0; i < 6; i++) {
          setTimeout(function(){
            deleteSorry();
          }, 6000+(i*100) );
        }
        h++;
      }

    });

  });

})(jQuery, window, document);


