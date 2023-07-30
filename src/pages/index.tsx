import * as React from 'react'
import { useState } from 'react'
import { graphql } from 'gatsby'
import { SEO } from '../components/seo'
import Modal, { ToggleModal } from '../components/Modal'

import Layout from '../components/Layout'
import GameCard from '../components/GameCard'
import HeaderCard from '../components/HeaderCard'
import MarkdownArea from '../components/MarkdownArea'
import analytics from '../analytics'
import Comments from '../components/Comments'


const MainPage = ({ data }: {
  data: any
}) => {
  const { nodes } = data.allMarkdownRemark;
  const markdownNodes = nodes.filter((node: any) => node.fields.collection == 'content');
  const teacherNodes = nodes.filter((node: any) => node.fields.collection != 'content');

  const [activeCard, setActiveCard] = useState<null|string>(null)


  return (
    <Layout pageTitle="Blog posts">
      <HeaderCard>
        {teacherNodes.map((node: any) => (
          <MarkdownArea html={node.html} key={node.id} />
        ))}
      </ HeaderCard>

      {markdownNodes.map((node: any, index: number) => (
        <GameCard
          node={node}
          index={index}
          key={node.id}
          isOpen={node.frontmatter.slug === activeCard}
          onClick={() => {
            const cardSlug = node.frontmatter.slug
            const cardIsAlreadyActive = (cardSlug === activeCard)
            if (cardIsAlreadyActive) {
              setActiveCard(null)
            }
            else {
              setActiveCard(node.frontmatter.slug)
              analytics.sendEvent('OpenCard', { cardSlug })
            }
          }}
        />
      ))}

      <p className="text-center text-gray-600 mb-10 text-2xl whitespace-nowrap p-1 mt-5">
        Arttu Mäkinen – 2023
      </p>
    </Layout>
  )
}
// text-center mt-7 mb-5 mx-3 text-lg text-gray-800
//
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(sort: { frontmatter: { priority: ASC }}) {
      nodes {
        fields {
          collection
        }
        frontmatter {
          title
          developer
          time
          difficulty
          priority
          tags
          slug
          links {
            title
            url
          }
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

export default MainPage

export const Head = () => (
  <SEO />
)
