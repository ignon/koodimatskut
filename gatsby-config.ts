import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Koodimatskut`,
    siteUrl: `https://www.koodimatskut.fi`
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
      options: { "icon": "src/images/icon.png" }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsyRemarkPlugins: [{
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 1200
          }
        }]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gfm: true,
        plugins: [{
          resolve: 'gatsby-transformer-remark',
          options: {
            maxWidth: 600
          }
        }]
      },
    },
    // "gatsby-remark-images",
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
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "content",
        "path": "./content/",
      },
      __key: "content"
    },
  ]
};

export default config;
