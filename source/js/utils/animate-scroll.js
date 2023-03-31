/* eslint-disable no-inner-declarations */
const animeItems = document.querySelectorAll('.anim-items');

function initAnimScroll() {
  if (animeItems.length > 0) {

    function animOnScroll() {
      window.addEventListener('scroll', animOnScroll);
      for (let index = 0; index < animeItems.length; index++) {
        const animItem = animeItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animeItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((scrollY > animeItemOffset - animItemPoint) && scrollY < (animeItemOffset + animItemHeight)) {
          animItem.classList.add('active');
        } else {
          animItem.classList.remove('active');
        }
      }
    }

    function offset(el) {
      const rect = el.getBoundingClientRect();
      const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
      const scrollTop = window.screenY || document.documentElement.scrollTop;
      return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
    }

    setTimeout(() => {
      animOnScroll();
    }, 400);
  }
}

export {initAnimScroll};
