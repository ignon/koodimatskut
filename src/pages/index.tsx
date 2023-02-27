import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image'

const BlogPage = ({ data }: {
  data: any
}) => {
  return (
    <Layout pageTitle="Blog posts">
      {data.allMdx.nodes.map((node: any) => {
        console.log(node)

        const { title, image } = node.frontmatter;
        const heroImage =
          getImage(node.fields?.hero?.childImageSharp?.gatsbyImageData)

        return (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            {heroImage &&
              <GatsbyImage
                image={heroImage}
                alt={title + "featured image"}
              />
            }

            <p>{node.frontmatter.priority}</p>
          </article>
        )
      })}
    </Layout>
  )
}

// (sort: { frontmatter: { date: DESC }})
export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { priority: ASC }}) {
      nodes {
        frontmatter {
          title
          priority
        }
        id
        excerpt
        fields {
           hero {
             id
             childImageSharp {
               gatsbyImageData
             }
           }
        }
      }
    }
  }
`

//export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage
