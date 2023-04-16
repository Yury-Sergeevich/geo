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
      markers: true,
      start: 'center top',
      scrub: true,
    },

    scale: 1.1,
  });
  gsap.to('.about__content', {
    scrollTrigger: {
      trigger: '.promo-slider',
      markers: true,
      start: 'center top',
      scrub: true,
    },

    scale: 1.1,
  });
}

export { initAnimate };
