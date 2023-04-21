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

  gsap.from('.categories__section-title-anim', {
    scrollTrigger: {
      trigger: '.about',
      start: '-20% center',
      stop: '+=400px',
      scrub: true,
    },
    scale: 0,
    transformOrigin: 'top center',
  });

  gsap.from('.categories__journal-title', {
    scrollTrigger: {
      trigger: '.categories',
      start: '-10% center',
      stop: '+=400px',
      scrub: true,
    },
    scale: 0,
    delay: 12,
    transformOrigin: 'top center',
  });

  gsap.from('.categories__title-anim-1', {
    scrollTrigger: {
      trigger: '.anim-1',
      start: '-90% bottom',
      stop: '+=100px',
      scrub: true,
    },
    scale: 0,
    transformOrigin: 'left center',
  });
  gsap.from('.categories__title-anim-2', {
    scrollTrigger: {
      trigger: '.anim-2',
      start: '-90% bottom',
      stop: '+=100px',
      scrub: true,
    },
    scale: 0,
    transformOrigin: 'left center',
  });
  gsap.from('.categories__title-anim-3', {
    scrollTrigger: {
      trigger: '.anim-3',
      start: '-90% bottom',
      stop: '+=100px',
      scrub: true,
    },
    scale: 0,
    transformOrigin: 'left center',
  });
  gsap.from('.categories__title-anim-4', {
    scrollTrigger: {
      trigger: '.anim-4',
      start: '-90% bottom',
      stop: '+=100px',
      scrub: true,
    },
    scale: 0,
    transformOrigin: 'left center',
  });
  gsap.from('.categories__title-anim-5', {
    scrollTrigger: {
      trigger: '.anim-5',
      start: '-90% bottom',
      stop: '+=100px',
      scrub: true,
    },
    scale: 0,
    transformOrigin: 'left center',
  });
  gsap.from('.categories__title-anim-6', {
    scrollTrigger: {
      trigger: '.anim-6',
      start: '-90% bottom',
      stop: '+=100px',
      scrub: true,
    },
    scale: 0,
    transformOrigin: 'left center',
  });
}

export { initAnimate };
