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
    siteUrl,
    // twitterUsername
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    siteLanguage: siteLanguage || defaultLanguage || '',
    // image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ''}`,
    image: `${siteUrl}${image}`,
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
      <Helmet title={seo.title}>
        <html lang={siteLanguage} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
      </Helmet>

      {/* <meta name="image" content={seo.image} /> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      {/* <meta name="twitter:creator" content={seo.twitterUsername} /> */}
      {/* <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>" /> */}

      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {children}
    </>
  )
}
