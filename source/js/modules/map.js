function initMap() {
  const map = L.map('map')
    .on('load', () => {
      console.log('Карта инициализирована');
    })
    .setView(
      {
        lat: 44.58927,
        lng: 34.326069,
      },
      12
    );

  const points = [
    {
      title: 'Пекарня Фурунджи',
      lat: 44.544765,
      lng: 34.27865,
    },
    {
      title: 'кафе "Балабан Янтык"',
      lat: 44.543374,
      lng: 34.279789,
    },
    {
      title: 'доставка Японский кухни "Nashi Sushi"',
      lat: 44.582358,
      lng: 34.343746,
    },
  ];

  points.forEach(({ lat, lng, title }) => {
    const marker = L.marker({
      lat,
      lng,
    });

    marker.addTo(map).bindPopup(title);
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
}

export { initMap };
