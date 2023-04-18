const closeBtn = document.querySelector('.modal-preview__close-btn');
const modalPreload = document.querySelector('.modal-preview');
const modalOverlay = document.querySelector('.modal-preview__overlay');

function initFunctionPreviewModal() {
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      if (modalPreload.classList.contains('is-active')) {
        modalPreload.classList.remove('is-active');
      } else {
        modalPreload.classList.add('is-active');
      }
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalPreload.classList.contains('is-active')) {
      modalPreload.classList.remove('is-active');
    }
  });

  modalOverlay.addEventListener('click', () => {
    if (modalPreload.classList.contains('is-active')) {
      modalPreload.classList.remove('is-active');
    } else {
      modalPreload.classList.add('is-active');
    }
  });
}

export { initFunctionPreviewModal };
