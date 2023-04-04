/* eslint-disable object-curly-spacing */
const initSwiperEthinicCossaks = (swiper) => {
  if (swiper) {
    // eslint-disable-next-line
    new Swiper('#SwiperEthinicCossaks', {
      navigation: {
        prevEl: '.categories__button--cossaks-prev',
        nextEl: '.categories__button--cossaks-next',
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
          slidesPerView: 4,
          slidesPerGroup: 2,
          spaceBetween: 20,
          initialSlide: 3,
        },

        1184: {
          slidesPerView: 5,
          slidesPerGroup: 2,
          spaceBetween: 20,
          initialSlide: 2,
        },

        1440: {
          slidesPerView: 5,
          slidesPerGroup: 1,
          spaceBetween: 30,
          initialSlide: 0,
        },
      },
    });
  }
};

export { initSwiperEthinicCossaks };