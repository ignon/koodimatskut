import * as React from 'react'
import { useState } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'


import GameCard from '../components/GameCard'

const MainPage = ({ data }: {
  data: any
}) => {
  const markdownNodes = data.allMarkdownRemark.nodes;

  const [activeCard, setActiveCard] = useState<null|string>(null)


  return (
    <Layout pageTitle="Blog posts">
      {markdownNodes.map((node: any, index: number) => (
        <GameCard
          node={node}
          index={index}
          key={node.id}
          isOpen={node.frontmatter.slug === activeCard}
          onClick={() => {
            const cardIsAlreadyActive = (node.frontmatter.slug === activeCard)
            if (cardIsAlreadyActive) {
              setActiveCard(null)
            }
            else {
              setActiveCard(node.frontmatter.slug)
            }
          }}
        />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { priority: ASC }}) {
      nodes {
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
