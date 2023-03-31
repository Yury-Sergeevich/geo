const initSwiperArticles = (swiper) => {
  const pagination = document.querySelector('.swiper-pagination');
  if (swiper) {
    // eslint-disable-next-line
    new Swiper('#swiperArticle', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      pagination: {
        el: pagination,
        clickable: true,
      },
      mousewheel: true,
      keyboard: true,

      loop: true,

      breakpoints: {
        280: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 22,
          initialSlide: 2,
        },

        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 22,
          initialSlide: 2,
        },

        // 768: {
        //   slidesPerView: 2,
        //   slidesPerGroup: 2,
        //   spaceBetween: 30,
        //   initialSlide: 2,
        // },

        // 1200: {
        //   slidesPerView: 1,
        //   slidesPerGroup: 4,
        //   spaceBetween: 40,
        //   initialSlide: 0,
        // },
      },
    });
  }
};

export { initSwiperArticles };
