import * as React from 'react'
import { useState } from 'react'
import { graphql } from 'gatsby'
import { SEO } from '../components/seo'
import Modal, { ToggleModal } from '../components/Modal'

import Layout from '../components/Layout'
import GameCard from '../components/GameCard'
import HeaderCard from '../components/HeaderCard'
import MarkdownArea from '../components/MarkdownArea'
import ToggleChildren from '../components/ToggleChildren'
import analytics from '../analytics'
import CommentSection from '../components/CommentSection'

const MainPage = ({ data }: {
  data: any
}) => {
  const { nodes } = data.allMarkdownRemark;
  const markdownNodes = nodes.filter((node: any) => node.fields.collection == 'content');
  const teacherNodes = nodes.filter((node: any) => node.fields.collection != 'content');

  const [activeCard, setActiveCard] = useState<string>('')


  return (
    <Layout pageTitle="Blog posts">
      <HeaderCard>
        {teacherNodes.map((node: any) => (
          <MarkdownArea html={node.html} key={node.id} />
        ))}
        <CommentSection
          id={'opettajalle'}
          title={'opettajalle'}
          visible={activeCard == ''}
        />
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

      <ToggleChildren
        text='Arttu Mäkinen – 2023'
        divClassName='text-center mb-10 p-1 mt-5 pl-6'
        className='text-3xl text-gray-600'
      >
        <p className="text-gray-600 mb-10 text-3xl whitespace-nowrap p-1 mt-5">
          arttu.b.makinen@gmail.com
        </p>
      </ToggleChildren>
    </Layout>
  )
}

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
          numbered_links
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
