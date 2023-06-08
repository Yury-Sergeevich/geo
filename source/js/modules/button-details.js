const aboutButton = document.querySelector('.button-detail');
const aboutDetail = document.querySelector('.text-article__detail');
const buttonText = document.querySelector('.button-detail__text');

function openAboutDetail() {
  if (aboutButton) {
    aboutButton.addEventListener('click', function () {
      if (aboutDetail.classList.contains('text-article__detail--close')) {
        aboutDetail.classList.remove('text-article__detail--close');
        buttonText.textContent = 'Свернуть';
      } else {
        aboutDetail.classList.add('text-article__detail--close');
        buttonText.textContent = 'Подробнее';
      }
    });
  }
}

export { openAboutDetail };
