const modalPreload = document.querySelector('.modal-preview');

function initPreviewModal() {
  if (modalPreload.classList.contains('is-active')) {
    modalPreload.classList.remove('is-active');
  } else {
    modalPreload.classList.add('is-active');
  }
}

export { initPreviewModal };
