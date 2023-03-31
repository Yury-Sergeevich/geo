const menuWrapper = document.querySelector(".header__overlay");
const menuButton = document.querySelector(".menu-toggle");

function initMobMenu() {
  menuButton.addEventListener("click", () => {
    if (menuWrapper.classList.contains("header__overlay-open")) {
      menuWrapper.classList.remove("header__overlay-open");
    } else {
      menuWrapper.classList.add("header__overlay-open");
    }
  });
}

export { initMobMenu };
