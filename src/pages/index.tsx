import * as React from 'react'
import { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import { SEO } from '../components/seo'

import TitleCard from '../components/TitleCard'
import Layout from '../components/Layout'
import GameCard from '../components/GameCard'
import HeaderCard from '../components/HeaderCard'
import { ToggleModal } from '../components/Modal'
import MarkdownArea from '../components/MarkdownArea'
import ExternalLink from '../components/ExternalLink'
import analytics from '../analytics'
import CommentSection from '../components/CommentSection'
import ToggleChildren from '../components/ToggleChildren'
import useSeasons from '../hooks/useSeasons'


const MainPage = ({ data, pageContext }: {
  data: any,
  pageContext: any
}) => {
  const { nodes } = data.allMarkdownRemark;
  const markdownNodes = nodes.filter((node: any) => node.fields.collection === 'content');
  const teacherNodes = nodes.filter((node: any) => node.fields.collection !== 'content');
  const inEnglishPost = nodes.find((node: any) => node.frontmatter.slug == 'in-english')

  const [activeCard, setActiveCard] = useState<string>('')

  useSeasons()

  console.log({ pageContext })
  const { STATS } = pageContext

  return (
    <Layout pageTitle="Blog posts">
      {/* <p>{'build_key: ' + POSTHOG_API_KEY}</p> */}
      {/* <p>{'live_key: ' + process.env.POSTHOG_API_KEY}</p> */}
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
              setActiveCard('')
            }
            else {
              setActiveCard(node.frontmatter.slug)
              analytics.sendEvent('OpenCard', { cardSlug })
            }
          }}
        />
      ))}

        <ExternalLink
          className='text-center text-2xl text-gray-600 ml-1 my-5 mb-3'
          text={`Arttu Mäkinen`}
          url='https://ignon.github.io/'
        />
        <p className={`text-center text-lg italic text-gray-600 mb-1`}>
          Sivu päivitetty viimeksi {(new Date()).toLocaleDateString('fi-FI')}
        </p>
        <Stats STATS={STATS} />
        {/* <ToggleModal toggleText='In English'> <p>Moi!</p> </ToggleModal> */}
        <div className='text-center'>
          <ToggleChildren
            text='In English' className='text-left pr-4 pt-3 pb-1'
            onOpen={() => {
              requestAnimationFrame( () => {
                window.scrollTo({
                  left: 0,
                  top: document.body.scrollHeight,
                  behavior: 'smooth'
                });
              })
            }}
          >
            <TitleCard title='Koodimatskut.fi' styles='mt-3'>
              <MarkdownArea html={inEnglishPost.html} />
            </TitleCard>
          </ToggleChildren>
        </div>
    </Layout>
  )
}

const Stats = ({ STATS }: {
  STATS: any
}) => {
  if (!STATS) {
    return null
  }

  return (
    <div>
      <p className={`text-center text-lg italic mr-3 text-gray-600 my-1`}>Harjoituslinkkejä klikattu: {STATS.linkClicks}</p>
      <p className={`text-center text-lg italic mr-3 text-gray-600 my-1`}>Sivulatauksia: {STATS.pageViews}</p>
    </div>
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

export default MainPage

export const Head = () => (
  <SEO />
)
