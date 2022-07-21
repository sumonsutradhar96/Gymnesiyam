$('.banner_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows : false,
  });
  // banner part end
  new VenoBox({
    selector: ".my-link"
});
// testimonial part start
$('.test_slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows : false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// testimonial part end ===========
// counter part start ============
$('.counter').counterUp({
  delay: 10,
  time: 1000
});
// counter part end =========
// class part start =========
$('.logo_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows:true,
  prevArrow:'<span class="prev_arrow"><i class="fa-solid fa-angle-left"></i></span>', 
  nextArrow:'<span class="next_arrow"><i class="fa-solid fa-angle-right"></i></span>', 
});
// fixed menu part start=========
$(window).scroll(function(){
  if($(this).scrollTop() > 50){
      $('#main_menu').addClass('sticky') 
  } else{
      $('#main_menu').removeClass('sticky')
  }
});
// fixed menu part end=========


