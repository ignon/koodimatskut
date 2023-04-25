import * as React from 'react'
import { useState } from 'react'
import { graphql } from 'gatsby'
import { SEO } from '../components/seo'

import Layout from '../components/Layout'


import GameCard from '../components/GameCard'
import HeaderCard from '../components/HeaderCard'

const MainPage = ({ data }: {
  data: any
}) => {
  const markdownNodes = data.allMarkdownRemark.nodes;

  const [activeCard, setActiveCard] = useState<null|string>(null)


  return (
    <Layout pageTitle="Blog posts">
      <HeaderCard>
          <p>Tehtävät alkavat lukutaidottomille sopivilla harjoituksilla ja etenevät tavoitteellisesti käsite kerrallaan eteenpäin. Listan tarkoitus on tarjota opettajille mahdollisimman valmiiksi jäsenneltyä oppimateriaalia, joka ohjaa ja tukee oppituntien kulkua kuten matematiikan kirjakin. Kaikki tehtävät toimivat ilman tilien luontia, joko iPadilla tai suoraan selaimessa.
          Materiaalia riittää ainakin 25 oppitunniksi. Scratch ja muut projektilähtöisemmät ympäristöt ovat toki rinnalle suositeltavia.</ p>
          <p><br /></p>
          <p>Tähän on tulossa vielä laajempi selostus sivuston pedagogisista ratkaisuista, sekä selvitys materiaalien sopivuudesta ohjelmoinnin OPS:iin. Sivuston kehitys on vielä kesken vaikka onkin jo käyttökunnossa. Sivuston on kehittänyt Arttu Mäkinen</p>
      </ HeaderCard>

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

      <p className="text-center text-gray-600 mb-10 text-2xl whitespace-nowrap p-1 mt-5">Arttu Mäkinen - 2023</p>
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
