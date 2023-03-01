import * as React from 'react'
import { useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'


const Tag = ({ tag }: {
  tag: string
}) => (
  <span className={`
      inline-block whitespace-nowrap
      bg-gray-200 rounded-full
      px-2 pt-0.5 pb-1
      mr-2 mb-1
      text-md font-semibold text-gray-800`}>
    {tag}
  </span>
)

const LinkButton = ({ text }: {
  text: string
}) => {
  return (
      <button
        className={`
          my-2 py-2 grow
          bg-gray-300 hover:bg-gray-400 text-gray-800
          font-bold  px-4 mb-1 rounded-md
        `}
      >
        {text}
      </button>
  )
}

const Toggle = ({ text, onClick, isOpen }: {
  text: string,
  isOpen: boolean
  onClick: any,
}) => {

  const toggleIcon = (isOpen: boolean) => (
    (isOpen)
      ? <MdExpandLess className="inline-block"/>
      : <MdExpandMore className="inline-block"/>)

  return (
    <button
      onClick={onClick}
      className={`
        text-xl text-gray-700
        hover:text-gray-400
        pt-3
        flex-none
    `}>
      <div className="block flex-none shrink-1">
        {text} {toggleIcon(isOpen)}
      </div>
    </button>
  )
}

const HeroImage = ({ heroImage, altText }: {
  heroImage: any,
  altText: string
}) => (
    <div className="imageContainer w-full">
      {heroImage &&
        <GatsbyImage
          image={heroImage}
          alt={altText}
          className="w-full"
        />
      }
    </div>
)

const Card = ({ children }: {
  children: any
}) => {

    return (
      <div
        className={`
          flex flex-col items-center
          mb-6 min-w-full rounded-3xl
          shadow-xl shadow-black/40 overflow-hidden
        `}>

        {children}
      </div>
  )
}

const Markdown = ({ html }: {
  html: any
}) => (
  <div
    className="markdown-area mx-5 mt-10"
    dangerouslySetInnerHTML={{ __html: html }}
  />
)

const GameCard = ({ node, index }: {
  node: any,
  index: number,
}) => {

    const [cardIsOpen, setCardIsOpen] = useState(false);
    const [showMarkdown, setShowMarkdown] = useState(false);


    const { frontmatter } = node;
    const { title, hero, tags } = frontmatter;

    const heroImage =
      getImage(hero?.childImageSharp?.gatsbyImageData)

    return (
      <Card>
        {/* <h2>{node.frontmatter.title}</h2> */}
        <button onClick={() => setCardIsOpen(!cardIsOpen)} className="w-full">
          <HeroImage heroImage={heroImage} altText={title + "featured image"} />

          <div className="bg-gray-100 flex max-h-10 flex-row justify-start align-center w-full pl-4 mt-0">
            <h1 className="font-bold  text-gray-700 text-lg whitespace-nowrap p-1 mt-0.5">
              {index+1}. {title}
            </h1>
            <div className="flex ml-4 mt-1.5">
              {tags && tags.map((tag: string) => <Tag tag={tag} key={tag} />)}
            </div>
          </div>
        </button>

        {!cardIsOpen ||
        <div className="flex flex-col justify-start align-center my-4 w-full px-2">
          {(["1. Taiteilija: Käskysarjat", "2. Taiteilija: Silmukat"]).map(linkki => (
            <LinkButton text={linkki} key={linkki}/>
          ))}
          <Toggle
            text="Opettajalle"
            onClick={() => setShowMarkdown(!showMarkdown)}
            isOpen={showMarkdown}
          />
          {!showMarkdown || <Markdown html={node.html} />}
        </div>
        }
        {console.log('showMarkdown: ', showMarkdown)}


      </Card>
    )
}

const MainPage = ({ data }: {
  data: any
}) => {
  const markdownNodes = data.allMarkdownRemark.nodes;

  return (
    <Layout pageTitle="Blog posts">
      {markdownNodes.map((node: any, index: number) => (
        <GameCard node={node} index={index} key={node.id} />
      ))}
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

export default MainPage
