$(document).ready(function () {

const owlFunction = () => {
  if (window.innerWidth > 1023) {

    $(".conditions .owl-carousel").owlCarousel({

      responsive: {
        0: {
          items: 1,
          nav: false,
          loop: true,
          autoWidth: true,
          margin: 8
        },
        1024: {
          items: 4,
          nav: true,
          autoWidth: true,
          margin: 32,
          navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
          navElement: 'button type="button" role="presentation"',
          navClass: ["owl-prev", "owl-next"],
        },
        1280: {
          items: 4,
          nav: true,
          autoWidth: true,
          margin: 48,
          navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
          navElement: 'button type="button" role="presentation"',
          navClass: ["owl-prev", "owl-next"],
        },
        1440: {
          items: 4,
          nav: true,
          autoWidth: true,
          margin: 52,
          navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
          navElement: 'button type="button" role="presentation"',
          navClass: ["owl-prev", "owl-next"],
        }
      }
    });
  }

}
owlFunction();
$(window).on('resize', owlFunction)

// *** МОДАЛЬНОЕ ОКНО *** 
  // показ видео при клике на иконку

  const modal = $('.modal');
  $('.video__box').each(function () {

    $(this).click(function () {
      let item = $(this);
      let videoSrc = $(item).data('src');

      let modal = $('.modal');
      let modalVideo = $(modal).find('iframe');
      $(modalVideo).attr('src', videoSrc);

      $(modal).fadeIn();
      $('body').addClass('overflow-h');

      setIframeSize(modal);
    })

    // закрытие по клавише Esc.
    $(document).keydown(function (e) {
      if (e.keyCode === 27) {
        e.stopPropagation();
        $(modal).fadeOut();
      }
      $('body').removeClass('overflow-h');
    });

    // закрытие при клике не по видео.
    $(modal).click(function (e) {
      if (e.target.tagName != 'IFRAME') {
        $(modal).fadeOut();
      }
      $('body').removeClass('overflow-h');
    })
  })

  function setIframeSize(modal) {
    const iframe = $(modal).find('iframe');
    const iframeWidth = $(iframe).css('width');    
    const iframeHeight = parseInt(iframeWidth) * 0.7 + 'px';
    
    $(iframe).css('height', iframeHeight);
  }

$(window).resize(function(){window.setTimeout('location.reload()', 500);});
});