import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image'

const BlogPage = ({ data }: {
  data: any
}) => {
  return (
    <Layout pageTitle="Blog posts">
      {data.allMarkdownRemark.nodes.map((node: any) => {

        const { frontmatter, html } = node;
        const { title, image, hero } = frontmatter;

        const heroImage =
          getImage(hero?.childImageSharp?.gatsbyImageData)

        return (
          <article key={node.id} style={{marginBottom: "20px"}}>
            {/* <h2>{node.frontmatter.title}</h2> */}
            {heroImage &&
              <GatsbyImage
                image={heroImage}
                alt={title + "featured image"}
                style={{
                  borderRadius: "20px",
                  boxShadow: "0 0px 25px rgba(0, 0, 0, 0.3)",
                  minWidth: "100%"
                }}
              />
            }
            {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
            {/* <p>{frontmatter.priority}</p> */}
          </article>
        )
      })}
    </Layout>
  )
}

// (sort: { frontmatter: { date: DESC }})
export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          priority
          hero {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        html
        id
      }
    }
  }
`

//export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage
