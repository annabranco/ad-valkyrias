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
            ["News", "/"],
            ["The Club", "/the-club/"],
            ["Players", "/players/"],
            ["Matches", "/category/matches/"],
            ["Juniors", "/tag/junior/"],
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
