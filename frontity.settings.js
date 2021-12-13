const settings = {
  name: "ad-valkyrias",
  state: {
    frontity: {
      url: "https://threebunniesfc.wordpress.com",
      title: "A.D. Valkyrias",
      description: "Asociación Deportiva Valkyrias",
    },
  },
  packages: [
    {
      name: "app",
      state: {
        theme: {
          menu: [
            ["Noticias", "/"],
            ["Sobre nosotras", "/the-club/"],
            ["Equipo senior", "/players/"],
            ["Partidos", "/category/matches/"],
            ["Juveniles", "/tag/junior/"],
          ],
          featured: {
            showOnList: true,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://public-api.wordpress.com/wp/v2/sites/threebunniesfc.wordpress.com",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
