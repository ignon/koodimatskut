import * as React from 'react'
import { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import { SEO } from '../components/seo'
import TitleCard from '../components/TitleCard'
import Layout from '../components/Layout'
import GameCard from '../components/GameCard'
import HeaderCard from '../components/HeaderCard'
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
  console.log(pageContext)
  const { nodes } = pageContext.data.allMarkdownRemark;
  const markdownNodes = nodes.filter((node: any) => node.fields.collection === 'content');
  const teacherNodes = nodes.filter((node: any) => node.fields.collection !== 'content');
  const inEnglishPost = nodes.find((node: any) => node.frontmatter.slug == 'in-english')

  const [activeCard, setActiveCard] = useState<string>('')

  useSeasons()

  console.log({ pageContext })
  const { STATS, DATE } = pageContext

  return (
    <Layout pageTitle="Blog posts">
      <HeaderCard>
        {teacherNodes.map((node: any) => (
          <MarkdownArea html={node.html} key={node.id} />
        ))}
        <CommentSection
          id='opettajalle'
          title='opettajalle'
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
          className='text-center text-2xl text-gray-600 ml-1 mt-5'
          text={`Arttu Mäkinen`}
          url='https://ignon.github.io/'
        />
        <p className={`text-center text-lg italic text-gray-600 mt-3 mb-1.5`}>
          Sivu päivitetty viimeksi {DATE}
        </p>
        <Stats STATS={STATS} />
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
    <div className=''>
      <p className={`text-center text-lg italic mr-3 text-gray-600 my-2`}>Harjoituslinkkejä klikattu: {STATS.linkClicks}</p>
      <p className={`text-center text-lg italic mr-3 text-gray-600 my-2`}>Sivulatauksia: {STATS.pageViews}</p>
    </div>
  )
}

export default MainPage

export const Head = () => (
  <SEO />
)
