$(document).ready(function () {
  const owl = $('.slider .owl-carousel');
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
  });

  handleControl('.slider');

  const owlCardService = $('.wrapper-slider-service .owl-carousel');
  owlCardService.owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    responsive: {
      768: {
        items: 2,
      },
      1024: {
        items: 4,
      },
    },
  });
  handleControl('.service');

  const owlCardEpap = $('.wrapper-slider-epap .owl-carousel');
  owlCardEpap.owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    responsive: {
      768: {
        items: 2,
      },
      1024: {
        items: 4,
      },
    },
  });
  handleControl('.epap');

  const owlCardCustomer = $('.wrapper-slider-customer .owl-carousel');
  owlCardCustomer.owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    responsive: {
      768: {
        items: 2,
      },
      1024: {
        items: 4,
      },
    },
  });
  handleControl('.customer');

  const owlCoreValue = $('.wrapper-slider-core-value .owl-carousel');
  owlCoreValue.owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    responsive: {
      768: {
        items: 2,
      },
      1024: {
        items: 4,
      },
    },
  });
  handleControl('.core-value');

  const owlHistory = $('.wrapper-slider-history .owl-carousel');
  owlHistory.owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
  });
  handleControl('.history');
  handleDots(
    '.wrapper-slider-history .owl-carousel',
    '.wrapper-date-history .date-list .date-item',
    '.history',
    '.wrapper-date-history .date-list .date-item'
  );

  const owlStaffTeam = $('.wrapper-slider-staff .owl-carousel');
  owlStaffTeam.owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    responsive: {
      768: {
        items: 2,
      },
      1024: {
        items: 4,
      },
    },
  });
  handleControl('.staff-team');

  const owlNews = $('.wrapper-slider-card-news .owl-carousel');
  owlNews.owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
  });

  handleControl('.news');

  $('.staff-team .wrapper-btn-more .btn-more').click(function (e) {
    e.preventDefault();
  });

  $('.staff-team .wrapper-btn-more').click(function (e) {
    const name = $(this).closest('.wrapper-card-info-staff').find('.name').data('name');
    const position = $(this).closest('.wrapper-card-info-staff').find('.position').data('position');
    const phone = $(this).closest('.wrapper-card-info-staff').find('.phone').data('phone');
    const email = $(this).closest('.wrapper-card-info-staff').find('.email').data('email');
    const image = $(this).closest('.wrapper-card-info-staff').find('.wrapper-avatar img').attr('src');

    $(this).closest('#introduce-page').find('.popup').html(` <div class="container">
    <div class="popup-inner">
        <div class="wrapper-background">
            <span class="btn-close">
                <img src="./images/icons/i-25.png" alt="">
            </span>
            <div class="wrapper-content">
                <h2 class="title">
                    Giới thiệu về <span data-name="${name}" class="text name">${name}</span>
                </h2>
                <div class="wrapper-info-content">
                    <div class="wrapper-avatar">
                        <img src="${image}" alt="${name}">
                    </div>

                    <div class="wrapper-info">
                        <div class="wrapper-info-top">
                            <div class="wrapper-text">
                                <p class="text">Họ tên: </p>
                                <p data-name="${name}" class="text-info name">${name}</p>
                            </div>

                            <div class="wrapper-text">
                                <p class="text">Chức vụ: </p>
                                <p data-position="${position}" class="text-info">${position}</p>
                            </div>

                            <div class="wrapper-text">
                                <p class="text">Điện thoại: </p>
                                <p data-phone="${phone}" class="text-info">${phone}</p>
                            </div>

                            <div class="wrapper-text">
                                <p class="text">Email: </p>
                                <p data-email=">${email}" class="text-info">${email}</p>
                            </div>
                        </div>

                        <p class="description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                            a
                            galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
                            text
                            of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                            dummy
                            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                            to
                            make a type specimen book
                        </p>
                        <p class="description">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown
                            printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum
                            is
                            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            of
                            type and scrambled it to make a type specimen book</p>
                    </div>

                </div>

                <p class="sub-description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to...
                </p>
            </div>
        </div>
    </div>
</div>`);
    $(this).closest('#introduce-page').find('.popup').addClass('active');
  });

  $('.popup .btn-close').click(function (e) {
    $(this).closest('#introduce-page').find('.popup.active').removeClass('active');
  });

  $('.popup').click(function (e) {
    $(this).removeClass('active');
  });

  $('.popup .wrapper-background').click(function (e) {
    e.stopPropagation();
  });

  let isClicked = false;

  $('#service-page .top-service .wrapper-btn-more .btn-more').click(function (e) {
    e.preventDefault();
    isClicked = !isClicked;
    isClicked
      ? $(this).closest('.wrapper-btn-more').addClass('active')
      : $(this).closest('.wrapper-btn-more').removeClass('active');

    isClicked
      ? $(this).closest('.top-service').find('.wrapper-title .description').addClass('active')
      : $(this).closest('.top-service').find('.wrapper-title .description').removeClass('active');

    isClicked ? $(this).find('span').text('Thu gọn') : $(this).find('span').text('Xem tiếp');
    isClicked ? $(this).find('img').css('transform', 'rotate(180deg)') : $(this).find('img').css('transform', 'rotate(0)');
  });
});

function handleDots(wrapperSlider, dotsContainer, parent, dotItem) {
  $(dotsContainer).click(function () {
    $(this)
      .closest(parent)
      .find('.owl-carousel')
      .trigger('to.owl.carousel', [$(this).index(), 300]);
    $(this).closest(`${parent}`).find('.owl-carousel').trigger('stop.owl.autoplay');
    $(this).closest(`${parent}`).find('.owl-carousel').trigger('play.owl.autoplay');
    $(this).closest(parent).find('.active').removeClass('active');
    $(this).addClass('active');
  });
  $(wrapperSlider).on('changed.owl.carousel', function (e) {
    let index = $(parent).find('.owl-dots .active').index() + 1;
    $(dotItem).removeClass('active');
    $(`${dotItem}:nth-child(${index})`).addClass('active');
  });
}

function handleControl(parent) {
  if ($('.wrapper-control .control.left').length > 0) {
    $('.wrapper-control .control.left').click(function () {
      $(this).closest(`${parent}`).find('.owl-carousel').trigger('stop.owl.autoplay');
      $(this).closest(`${parent}`).find('.owl-carousel').trigger('play.owl.autoplay');
      $(this).closest(`${parent}`).find('.owl-carousel').trigger('prev.owl.carousel');
    });
  }
  if ($('.wrapper-control .control.right').length > 0) {
    $('.wrapper-control .control.right').click(function () {
      $(this).closest(`${parent}`).find('.owl-carousel').trigger('stop.owl.autoplay');
      $(this).closest(`${parent}`).find('.owl-carousel').trigger('play.owl.autoplay');
      $(this).closest(`${parent}`).find('.owl-carousel').trigger('next.owl.carousel');
    });
  }
}
