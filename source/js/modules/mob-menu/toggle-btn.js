const menuWrapper = document.querySelector('.wrapper');
const menuButton = document.querySelector('.menu-toggle');

function initMobMenu() {
  menuButton.addEventListener('click', () => {
    if (menuWrapper.classList.contains('wrapper--open-mobmenu')) {
      menuWrapper.classList.remove('wrapper--open-mobmenu');
    } else {
      menuWrapper.classList.add('wrapper--open-mobmenu');
    }
  });
}

export { initMobMenu };
