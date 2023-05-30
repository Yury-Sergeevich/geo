/* eslint-disable object-curly-spacing */
import { iosVhFix } from './utils/ios-vh-fix';
import { initModals } from './modules/modals/init-modals';
// import { Form } from './modules/form-validate/form';
import { initSwiperArticles } from './modules/swiper-articles/swiper-articles';
import { initMobMenu, closeMobMenu } from './modules/mob-menu/toggle-btn';
import { initSwiperTopNews } from './modules/swiper-top-news/swiper-top-news';
import { initSwiperGeoEco } from './modules/categories/SwiperGeoEco';
import { initSwiperEcoEconomica } from './modules/categories/SwiperEcoEconomica';
import { initSwiperEthinicCossaks } from './modules/categories/SwiperEthinicCossaks';
import { initSwiperArtCultural } from './modules/categories/ArtCultural';
import { initSwiperCategories } from './modules/categories/SwiperCategories';
import { initAnimate } from './vendor/gspa-animate';
import { videoEnabled } from './modules/video-burungi';
// import { initPreviewModal } from './modules/open-preview';
// import { initFunctionPreviewModal } from './modules/modals/preview-modal';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  const swiper = document.querySelector('.swiper');

  // Utils
  // ---------------------------------

  iosVhFix();
  videoEnabled();

  // Modules
  // ---------------------------------
  initMobMenu();
  closeMobMenu();
  initSwiperArticles(swiper);
  initSwiperTopNews(swiper);
  initSwiperGeoEco(swiper);
  initSwiperEcoEconomica(swiper);
  initSwiperEthinicCossaks(swiper);
  initSwiperArtCultural(swiper);
  initSwiperCategories(swiper);

  initAnimate();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    // const form = new Form();
    // window.form = form;
    // form.init();
  });
});

// window.onload = function () {
//   setTimeout(initPreviewModal, 3000);
//   initFunctionPreviewModal();
// };

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
