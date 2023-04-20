function initAnimate() {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();
  tl.fromTo(
    '.header__promo-title',
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
    }
  );
  // tl.fromTo(
  //   '.nav__categories-item',
  //   {
  //     x: -50,
  //     opacity: 0,
  //   },
  //   {
  //     x: 0,
  //     opacity: 1,
  //     duration: 1,
  //     stagger: 0.15,
  //   }
  // );
  tl.fromTo(
    '.header__promo-subtitle',
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.9,
    }
  );
  tl.fromTo(
    '.logo',
    {
      scale: 0,
    },
    {
      scale: 1,
      duration: 0.9,
    },
    0.5
  );
  tl.fromTo(
    '.logo__subtitle',
    {
      y: -50,
    },
    {
      y: 0,
      duration: 0.9,
    },
    0.6
  );

  gsap.to('.about__title', {
    scrollTrigger: {
      trigger: '.promo-slider',
      start: 'center top',
      scrub: true,
    },

    x: -400,
    opacity: 0,
    delay: 2,
  });

  // gsap.to('.about__content', {
  //   scrollTrigger: {
  //     trigger: '.promo-slider',
  //     start: 'center top',
  //     scrub: true,
  //   },

  //   scale: 1.1,
  // });

  // gsap.from('.categories__image-anim-2', {
  //   scrollTrigger: {
  //     trigger: '.anim-2',
  //     start: '-30% center',
  //     stop: '+=300px',
  //   },
  //   scale: 0,
  //   transformOrigin: 'top center',
  //   stagger: 1,
  //   ease: 0,
  // });

  // gsap.from('.categories__image-anim-3', {
  //   scrollTrigger: {
  //     trigger: '.anim-3',
  //     start: '-30% center',
  //     stop: '+=300px',
  //   },
  //   scale: 0,
  //   transformOrigin: 'top center',
  //   stagger: 1,
  //   ease: 0,
  //   scrub: 1,
  // });

  // gsap.from('.categories__image-anim-4', {
  //   scrollTrigger: {
  //     trigger: '.anim-4',
  //     start: '-30% center',
  //     stop: '+=300px',
  //   },
  //   scale: 0,
  //   transformOrigin: 'top center',
  //   stagger: 1,
  //   ease: 0,
  //   scrub: 1,
  // });

  // gsap.from('.categories__image-anim-5', {
  //   scrollTrigger: {
  //     trigger: '.anim-5',
  //     start: '-30% center',
  //     stop: '+=300px',
  //   },
  //   scale: 0,
  //   transformOrigin: 'top center',
  //   stagger: 1,
  //   ease: 0,
  //   scrub: 1,
  // });

  // gsap.from('.categories__image-anim-6', {
  //   scrollTrigger: {
  //     trigger: '.anim-6',
  //     start: '-30% center',
  //     stop: '+=300px',
  //   },
  //   scale: 0,
  //   transformOrigin: 'top center',
  //   stagger: 1,
  //   ease: 0,
  //   scrub: 1,
  // });
}

export { initAnimate };
