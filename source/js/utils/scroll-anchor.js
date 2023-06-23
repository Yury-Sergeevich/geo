function linkAnchor() {
  // Ожидайте полной загрузки страницы
  window.addEventListener('load', function () {
    // Проверяем, есть ли якорь в URL-адресе
    if (window.location.hash) {
      // Получаем идентификатор якоря из URL-адреса
      let target = window.location.hash.substring(1);

      // Переходим к элементу с указанным идентификатором якоря
      document.getElementById(target).scrollIntoView();
    }
  });
}

export { linkAnchor };
