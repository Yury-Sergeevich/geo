const menuWrapper = document.querySelector('.wrapper');
const menuButton = document.querySelector('.menu-toggle');
const categoriesLink = document.querySelectorAll('.nav__categories-link');

function initMobMenu() {
  menuButton.addEventListener('click', () => {
    if (menuWrapper.classList.contains('wrapper--open-mobmenu')) {
      menuWrapper.classList.remove('wrapper--open-mobmenu');
    } else {
      menuWrapper.classList.add('wrapper--open-mobmenu');
    }
  });
}

function closeMobMenu() {
  categoriesLink.forEach((item) => {
    item.addEventListener('click', function () {
      if (menuWrapper.classList.contains('wrapper--open-mobmenu')) {
        menuWrapper.classList.remove('wrapper--open-mobmenu');
      } else {
        menuWrapper.classList.add('wrapper--open-mobmenu');
      }
    });
  });
}

export { initMobMenu, closeMobMenu };
