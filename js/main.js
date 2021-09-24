$(function(){

    /* $('.intro__slider').slick({
        dots: true,
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        //verticalSwiping: true,
        arrows: false,

      }); */
      $('.info-business__slider').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          },
          
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,

            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

      $('.burger').on('click', function() {
        $(this).toggleClass('_active');
        $('.header__links--block').toggleClass('_active');
      });



});