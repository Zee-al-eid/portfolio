$(document).ready(function() {
  // MODAL
  var modalText = {
    parallaxPortfolio: {
      title: 'Parallax Portfolio',
      tag: 'COLORFUL PORTFOLIO ',
      detail:
        'Playful and Colorful One-Page portfolio featuring Parallax effects and animations and have Light/Dark mode.',
      link: 'https://parallax-portfolio.netlify.app/',
      link2: 'https://github.com/Zee-al-eid/parallax-portfolio'
    },
    awesomePortfolio: {
      title: 'Awesome Portfolio',
      tag: 'CLEAN AND MODERN PORTFOLIO',
      detail:
        'A clean, beautiful and responsive portfolio featuring Modern UI Design, Reveal Animations and User-Friendly Interface.',
      link: 'https://fast-awesome-portfolio.netlify.app/',
      link2: 'https://github.com/Zee-al-eid/awesome-portfolio'
    },
    hostee: {
      title: 'Hostee Website',
      tag: 'FAKE WEB HOSTING',
      detail:
        'A Modern and very User-Friendly website with full responsiveness featuring animations, amazing cards and content menu.',
        link: 'https://zee-al-eid.github.io/hostee-website/',
        link2: 'https://github.com/Zee-al-eid/hostee-website'
    },
    gradientGenerator: {
      title: 'Gradient Generator',
      tag: 'TOOL TO GENERATE BACKGROUNDS GRADIENTS',
      detail:
        'Gradient Generator is a happy little website and free tool that lets you generates a perfect color gradient and the fitting css code.',
      link: 'https://zee-al-eid.github.io/gradient-generator/',
        link2: 'https://github.com/Zee-al-eid/gradient-generator'
    },
    randomColor: {
      title: 'Random Color Generator',
      tag: 'GENERATES A RANDOM COLOR',
      detail:
        'JavaScript color generator designed to be lightweight, fast and easy to use that generates random color.',
      link: 'https://random-color-generator-javascript.netlify.app/',
      link2: 'https://github.com/Zee-al-eid/random-color-generator'
    },
    reviewsSlider: {
      title: 'Reviews Slider',
      tag: 'ANIMATED REVIEWS / TESTMONIALS SLIDER',
      detail:
        'Testimonials and reviews are a great way to add social proof to your website and help build trust among your users. ',
      link: 'https://reviews-slider.netlify.app/',
      link2: 'https://github.com/Zee-al-eid/reviews-slider'
    },
    darkLightMode: {
      title: 'Dark/Light Mode',
      tag: 'TOGGLE B/W DARK AND LIGHT MODE',
      detail:
        'Switch between dark and light mode with CSS and JavaScript. Dark mode uses light-colored text and other elements on dark-colored background.',
        link: 'https://zee-al-eid.github.io/dark-light-mode/',
        link2: 'https://github.com/Zee-al-eid/dark-light-mode'
    },
    qna: {
      title: 'Q-n-A / FAQ',
      tag: 'MODERN FAQ SECTION',
      detail:
        'Identifying and answering searchers’ questions should be a key component of any SEO strategy.',
      link: 'https://q-n-a.netlify.app/',
      link2: 'https://github.com/Zee-al-eid/Q-n-A'
    },
    tabsMenu: {
      title: 'Tabs Menu',
      tag: 'SIMPLE MENU WITH TABS',
      detail:
        'Menus need to be simple enough to understand that allow customers to effortlessly go through the process of viewing & purchasing products.',
      link: 'https://tab-menu-javascript-zee.netlify.app/',
      link2: 'https://github.com/Zee-al-eid/tab-menu-javascript'
    },
    elasticSlider: {
      title: 'Slider | Elastic Transiton',
      tag: 'CHANGES IMAGES WITH ELASTICITY EFFECT',
      detail:
        'Sliders can run slideshows automatically without user input on pre-defined time intervals and also respond to user interaction like click.',
      link: 'https://zee-al-eid.github.io/elastic-slider/slider.html',
      link2: 'https://github.com/Zee-al-eid/elastic-slider'
    },
    shuffleSlider: {
      title: 'Slider | Shuffle Transiton',
      tag: 'CHANGES IMAGES WITH SHUFFLING EFFECT',
      detail:
        'Sliders can run slideshows automatically without user input on pre-defined time intervals and also respond to user interaction like click.',
      link: 'https://zee-al-eid.github.io/shuffle-slider/slider.html',
      link2: 'https://github.com/Zee-al-eid/shuffle-slider'
    },
    menuHover: {
      title: 'Menu Hover Effect',
      tag: 'AWESOME NAVBAR MENU HOVER EFFECT',
      detail:
        'An Amazing Navbar for a website is very beneficial and important for the overall user experience.',
      link: 'https://zee-al-eid.github.io/menu-hover-effect/index.html',
      link2: 'https://github.com/Zee-al-eid/menu-hover-effect'
    },
    cardHover: {
      title: 'Card Hover Effect',
      tag: 'DEPTH OF FIELD CARD HOVER EFFECT',
      detail:
        'Cards are a great way to develop the idea of interaction and can be used in multiple ways to satisfy specific functions.',
      link: 'https://zee-al-eid.github.io/dof-card-hover-effects/index.html',
      link2: 'https://github.com/Zee-al-eid/dof-card-hover-effects'
    },
    ecommerceCard: {
      title: 'E-Commerce Card',
      tag: 'PRODUCT CARD DESIGN',
      detail:
        'Ecommerce Product Card Design using Vanilla Tilt.js with full mobile responsiveness.',
      link: 'https://zee-al-eid.github.io/responsive-ecommerce-product-card/index.html',
      link2: 'https://github.com/Zee-al-eid/responsive-ecommerce-product-card'
    },
    checkBoxUI: {
      title: 'CheckBox UI',
      tag: 'CUSTOM CHECKBOX DESIGN',
      detail:
        'CheckBoxes are used when looking for yes or no answers. It is necessary to bind custom checkbox with the input for better user experience.',
      link: 'https://zee-al-eid.github.io/check-box-ui/index.html',
      link2: 'https://github.com/Zee-al-eid/check-box-ui'
    }
  };

  $('#gallery .button').on('click', function() {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 600,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function() {
    shiftSlide(-1);
  });
  $('#prev').click(function() {
    shiftSlide(1);
  });

  carousel.on('mousedown', function() {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function() {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function() {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function() {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);
    if (modalText[id].link2)
      $('#modal .button2')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link2);

    $.each($('#modal li'), function(index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + '-' + index + ".png') center center/cover",
        backgroundSize: 'cover'
      });
    });
  }
});
