/* eslint-disable object-curly-spacing */
const initSwiperEcoEconomica = (swiper) => {
  if (swiper) {
    // eslint-disable-next-line
    new Swiper('#SwiperEcoEconomica', {
      navigation: {
        prevEl: '.categories__button--ecoeconomica-prev',
        nextEl: '.categories__button--ecoeconomica-next',
      },

      mousewheel: true,
      keyboard: true,

      breakpoints: {
        280: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 22,
          initialSlide: 0,
        },

        400: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 22,
          initialSlide: 0,
        },

        500: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 22,
          initialSlide: 0,
        },

        768: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 22,
          initialSlide: 0,
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
          slidesPerView: 5,
          slidesPerGroup: 2,
          spaceBetween: 20,
          initialSlide: 0,
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

export { initSwiperEcoEconomica };
