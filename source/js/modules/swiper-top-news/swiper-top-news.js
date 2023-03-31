/* eslint-disable object-curly-spacing */
const initSwiperTopNews = (swiper) => {
  const pagination = document.querySelector('.swiper-pagination-1');
  if (swiper) {
    // eslint-disable-next-line
    new Swiper('#topNewsSwiper', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      pagination: {
        el: pagination,
        clickable: true,
      },
      mousewheel: true,
      keyboard: true,

      breakpoints: {
        280: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 22,
          initialSlide: 2,
        },

        768: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 22,
          initialSlide: 2,
        },

        1024: {
          slidesPerView: 3,
          slidesPerGroup: 2,
          spaceBetween: 30,
          initialSlide: 2,
        },

        1440: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 30,
          initialSlide: 0,
        },
      },
    });
  }
};

export { initSwiperTopNews };
