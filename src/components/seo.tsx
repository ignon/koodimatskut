import React from "react"
import Helmet from 'react-helmet'
import { useSiteMetadata } from "../hooks/useSiteMetadata"

export const SEO = ({ title, image, description, pathname, children, siteLanguage }: {
  title?: string,
  description?: string,
  pathname?: string,
  image?: string,
  siteLanguage?: string
  children?: any,
}) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteLanguage: defaultLanguage,
    image: defaultImage,
    siteUrl,
    // twitterUsername
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    siteLanguage: siteLanguage || defaultLanguage || '',
    // image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ''}`,
    image: `${siteUrl}${image || defaultImage}`,
    // twitterUsername,
  }

  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: siteUrl,
      name: defaultTitle,
      // alternateName: headline ? headline : "",
    },
  ]

  return (
    <>
      <Helmet title={seo.title} htmlAttributes={{ lang: siteLanguage }}>
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
      </Helmet>

      <meta property="og:title" content={seo.title} />
      <meta property="og:type" content='website' />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:description" content={seo.description} />

      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {children}
    </>
  )
}
