$('.testimonials-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});

$('.features-list').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,

  responsive: [
    {
      breakpoint: 981,
      settings: {
        slidesToShow: 3,
        dots: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        dots: true,
      }
    },
    {
      breakpoint: 641,
      settings: {
        slidesToShow: 1,
        dots: true,
      }
    }
  ]

});

// sticky header

const $header = $('.header');

$(window).scroll(function(){
  const scrollTop = $(window).scrollTop() + 1;
  const offset = $('.promotion').offset().top

  if (scrollTop + 1 >= offset) {
    $header.addClass('header-sticky');
  }
  else if (scrollTop <= 30) {
    $header.removeClass('header-sticky');
  }
});

// smooth scroll

$('[href="#"]').on('click', event => {
  event.preventDefault();
  
  $('html, body').animate({scrollTop: 0}, 500);
  
});

$('[href^="#anchor"]').on('click', event => {
  
  event.preventDefault();
  
  const $link = $(event.currentTarget);
  const $selector = $link.attr('href');
  const $target = $($selector);
  
  const $distance = $target.offset().top;
  
  $('html, body').animate({scrollTop: $distance}, 500);

});

// nav-mobile-btn

const navList = $('.nav-list');

const navMobileBtn = $('.nav-mobile-btn').on('click', event => {
  navList.removeClass('nav-list-display');
});

const navListSpace = navList.on('click', event => {
  navList.addClass('nav-list-display');
});