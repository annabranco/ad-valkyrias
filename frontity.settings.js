const settings = {
  name: 'ad-valkyrias',
  state: {
    frontity: {
      url: 'https://udvalkyrias.wordpress.com',
      title: 'U.D. Valkyrias',
      description: 'Unión Deportiva Valkyrias',
    },
  },
  packages: [
    {
      name: 'app',
      state: {
        theme: {
          menu: [
            ['Noticias', '/category/noticias'],
            ['Sobre nosotras', '/valkyrias/'],
            ['Equipo senior', '/senior/'],
            ['Juveniles', '/juveniles/'],
            ['Partidos', '/category/partidos/'],
            ['Calendario', '/calendario/'],
            ['Dónde estamos', '/mapa/'],
          ],
          featured: {
            showOnList: true,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: '@frontity/wp-source',
      state: {
        source: {
          api: 'https://public-api.wordpress.com/wp/v2/sites/udvalkyrias.wordpress.com',
        },
      },
    },
    '@frontity/tiny-router',
    '@frontity/html2react',
  ],
};

export default settings;
