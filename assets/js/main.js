(function($) {
  "use strict";
  
  $(window).scroll(function(){
    if($(this).scrollTop() > 200){
    $('#totop').fadeIn();
    }else{
    $('#totop').fadeOut();
    }
});

  // owlCarousel
  $(".mb_2slider").owlCarousel({
    loop: true,
    margin: 15,
    autoHeight: true,
    stagePadding: 100,
    items: 1,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
        margin: 10
      },
      400: {
        items: 1
      },
      767: {
        items: 1
      },
      992: {
        items: 1
      }
    }
  });

  // owlCarousel
  $(".mobile_slider").owlCarousel({
    loop: true,
    autoHeight: true,
    margin: 15,
    items: 1,
    navText: [''],
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
        margin: 10
      },
      992: {
        items: 1
      }
    }
  });

  
  $(".sl1 .owl-prev").append('<h2 class="rt_h2 slbtn2"> PASSIVHAUS </h2>');
  $(".sl2 .owl-prev").append('<h2 class="rt_h2 slbtn3"> LE BOIS EST EN MARCHE,<br> Again </h2>');
  $(".sl3 .owl-prev").append('<h2 class="rt_h2 slbtn4"> TRIPLE BALANCE </h2>');
  $(".sl4 .owl-prev").append('<h2 class="rt_h2 slbtn1"> TRANSFORMAR </h2>');

  $(".slbtn1").click(function(){
      $(".mobile_slider").removeClass("emt_arr");
      $(".sl4 .mb_3_slider").addClass("slider_active");
  })
  $(".slbtn2").click(function(){
      $(".mobile_slider").removeClass("emt_arr");
      $(".sl1 .mb_3_slider").addClass("slider_active");
  })
  $(".slbtn3").click(function(){
      $(".mobile_slider").removeClass("emt_arr");
      $(".sl2 .mb_3_slider").addClass("slider_active");
  })
  $(".slbtn4").click(function(){
      $(".mobile_slider").removeClass("emt_arr");
      $(".sl3 .mb_3_slider").addClass("slider_active");
  })

 
})(jQuery);
