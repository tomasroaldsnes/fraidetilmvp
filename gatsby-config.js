module.exports = {
  siteMetadata: {
    title: `Fra idé til MVP`,
    name: `Fra idé til MVP`,
    siteUrl: `https://fraidetilmvp.com`,
    description: `En eBok om hvordan du feiler deg frem til innovasjon.`,
    hero: {
      heading: `En eBok om f*ck-ups. Verktøy og lærdommer fra å jobbe med innovasjon i startups og enterprise.`,
      maxWidth: 750,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/narative`,
      },
      {
        name: `github`,
        url: `https://github.com/narative`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/narative.co`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/narative/`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/narativestudio`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fra idé til MVP`,
        short_name: `Ide til MVP`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
