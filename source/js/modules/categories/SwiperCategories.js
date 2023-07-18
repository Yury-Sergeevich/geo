/* eslint-disable object-curly-spacing */
const initSwiperCategories = (swiper) => {
  if (swiper) {
    // eslint-disable-next-line
    new Swiper('#SwiperCategories', {
      navigation: {
        prevEl: '.categories__button--fact-fiction-prev',
        nextEl: '.categories__button--fact-fiction-next',
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

        400: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 22,
          initialSlide: 1,
        },

        500: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 22,
          initialSlide: 1,
        },

        768: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 22,
          initialSlide: 1,
        },

        1024: {
          slidesPerView: 3,
          slidesPerGroup: 2,
          spaceBetween: 20,
          initialSlide: 3,
        },

        1170: {
          slidesPerView: 3,
          slidesPerGroup: 2,
          spaceBetween: 20,
          initialSlide: 3,
        },

        1184: {
          slidesPerView: 4,
          slidesPerGroup: 2,
          spaceBetween: 20,
          initialSlide: 1,
        },

        1440: {
          slidesPerView: 5,
          slidesPerGroup: 1,
          spaceBetween: 30,
          initialSlide: 1,
        },
      },
    });
  }
};

export { initSwiperCategories };
