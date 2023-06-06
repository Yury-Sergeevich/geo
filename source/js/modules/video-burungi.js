function createIframe(url) {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('src', url);
  iframe.classList.add('video__media');
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
  iframe.setAttribute('allowfullscreen', '');

  return iframe;
}

const videoEnabled = () => {
  const video = document.querySelectorAll('.video');
  if (video.length > 0) {
    video.forEach((item) => {
      const link = item.querySelector('.video__link');
      const button = item.querySelector('.video__button');
      link.removeAttribute('href');
      item.classList.add('video--enabled');

      item.addEventListener('click', (e) => {
        let currentUrl = e.currentTarget.getAttribute('data-url');
        const iframe = createIframe(currentUrl);

        link.remove();
        button.remove();
        e.currentTarget.append(iframe);
      });
    });
  }
};

export { videoEnabled };
