import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Koodimatskut`,
    siteUrl: `https://www.koodimatskut.fi`,
    description: 'Ohjelmoinnin pelillisiä harjoituksia alakouluille',
    image: '/logo.jpg',
    siteLanguage: 'fi-FI'
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: { "icon": "static/logo.jpg" }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gfm: true,
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: { maxWidth: 1200 }
          },
          {
            resolve: "gatsby-remark-external-links",
            options: { target: "_blank" }
          }
        ]
      },
    },
    "gatsby-remark-autolink-headers",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { "name": "pages", "path": "./src/pages/" },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { "name": "teacher", "path": "./teacher/" },
      __key: "content"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { "name": "content", "path": "./content/", },
      __key: "content"
    },
  ]
};

export default config;
