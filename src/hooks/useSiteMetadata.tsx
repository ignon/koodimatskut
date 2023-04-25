import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          siteLanguage
        }
      }
    }
  `)

  return data.site.siteMetadata
}

// twitterUsername
// image
