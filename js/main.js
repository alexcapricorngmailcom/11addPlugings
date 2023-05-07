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
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});

// const slickNumbers = $('li > button');
// slickNumbers.text('');

$('.features-list').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: false,
  responsive: [
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        infinite: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        infinite: false
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      }
    }
  ]
});

// sticky header

$(window).scroll(function(){
  if ($(window).scrollTop() >= 568) {
    $('.header').addClass('sticky-header');
  }
  else if ($(window).scrollTop() <= 38) {
    $('.header').removeClass('sticky-header');
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