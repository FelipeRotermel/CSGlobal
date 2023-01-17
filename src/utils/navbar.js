import $ from 'jquery'

$(function() {
        $(window).scroll(function() {
          if($(this).scrollTop() > 500) { 
              $('.navbar').addClass('solid'),
              $('.logo').addClass('solid');
          } else {
              $('.navbar').removeClass('solid'),
              $('.logo').removeClass('solid');
          }
        });
});