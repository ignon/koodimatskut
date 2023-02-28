import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image'

const BlogPage = ({ data }: {
  data: any
}) => {
  return (
    <Layout pageTitle="Blog posts">
      {data.allMarkdownRemark.nodes.map((node: any, index: number) => {

        console.log(node)
        const { frontmatter, html } = node;
        const { title, image, hero, tags } = frontmatter;

        const heroImage =
          getImage(hero?.childImageSharp?.gatsbyImageData)

        const Tag = ({ tag }: {
          tag: string
        }) => (
          <span className="inline-block bg-gray-200 rounded-full px-2 py-0.5 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {tag}
          </span>
        )

        return (
          <div
            key={node.id}
            className={`
              flex flex-col items-center
              mb-6 min-w-full rounded-3xl
              shadow-xl shadow-black/40 overflow-hidden
              bg-white
            `}>

            {/* <h2>{node.frontmatter.title}</h2> */}
            <div className="imageContainer w-full">
              {heroImage &&
                <GatsbyImage
                  image={heroImage}
                  alt={title + "featured image"}
                  className="w-full"
                />
              }
            </div>

            <div className="flex flex-row justify-start align-center w-full px-2 mt-0">
              <h1 className="font-bold text-lg p-0 mt-0.5">
                {index+1}. {title}
              </h1>
              <div className="flex ml-4 mt-1.5">
                {tags && tags.map((tag: string) => <Tag tag={tag} key={tag} />)}
              </div>
            </div>

            {/* <div className="flex flex-row justify-start align-center w-full px-2 mt-0"> */}
            {/*   <button */}
            {/*     className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 mb-1 rounded-md" */}
            {/*   > */}
            {/*     Nettisivu */}
            {/*   </button> */}
            {/*   <p>{frontmatter.priority}</p> */}
            {/* </div> */}

            {/* <div */}
            {/*   className="markdown-area mx-5" */}
            {/*   dangerouslySetInnerHTML={{ __html: html }} */}
            {/* /> */}
          </div>
        )
      })}
    </Layout>
  )
}

// style={{
//   borderRadius: "20px",
//   boxShadow: "0 0px 25px rgba(0, 0, 0, 0.3)",
//   minWidth: "100%"
// }}
//
// (sort: { frontmatter: { date: DESC }})
export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { priority: ASC }}) {
      nodes {
        frontmatter {
          title
          priority
          tags
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
