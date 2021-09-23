$(function(){

    /* $('.intro__slider').slick({
        dots: true,
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        //verticalSwiping: true,
        arrows: false,

      }); */

      $('.burger').on('click', function() {
        $(this).toggleClass('_active');
        $('.header__links--block').toggleClass('_active');
      });



});