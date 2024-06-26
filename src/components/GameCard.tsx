import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import {  getImage } from 'gatsby-plugin-image'
import Modal from '../components/Modal'
import Tag from '../components/Tag'
import Toggle from '../components/Toggle'
import HeroImage from '../components/HeroImage'
import LinkButton from '../components/LinkButton'
import CommentSection from '../components/CommentSection'
import { MdAccessTime } from 'react-icons/md'
import type { ILinkButtonProp } from '../components/LinkButton'
import analytics from '../analytics'

import Card from '../components/Card'

import MarkdownArea from '../components/MarkdownArea'

const GameCard = ({ node, index, onClick, isOpen }: {
  node: any,
  index: number,
  isOpen: boolean,
  onClick: any
}) => {

    // const [divTopPosition, setDivTopPosition] = useState(0)
    const [showMarkdown, setShowMarkdown] = useState(false);

    const myRef = useRef<HTMLDivElement>(null);


    // useEffect(() => {
    //     const offsets = myRef.current!.getBoundingClientRect();
    //     const divRelativeTop = offsets.top;
    //     const windowAbsoluteTop = window.scrollY;
    //     const divAbsoluteTop = windowAbsoluteTop + divRelativeTop;
    //     const divHeight = myRef.current!.clientHeight;

    //     // const divTopDelta = Math.abs(divAbsoluteTop - divTopPosition)
    //     console.log({
    //        windowAbsoluteTop,
    //        divRelativeTop,
    //        divHeight
    //     })

    //     if (isOpen) {
    //       const divAbsoluteTopWhenCentered
    //         = divAbsoluteTop - window.innerHeight/2 + divHeight/2;

    //       window.scrollTo({
    //         top: divAbsoluteTop //windowAbsoluteTop + divRelativeTop - (window.innerHeight) / 2,
    //       })
    //       setDivTopPosition(divAbsoluteTop)
    //     }
    // }, [isOpen])


    const { frontmatter } = node;
    const { title, hero, tags } = frontmatter;
    const cardIsOpen = isOpen;

    const heroImage =
      getImage(hero?.childImageSharp?.gatsbyImageData)

    const onHeroImageClick = () => {
      onClick()
      setShowMarkdown(false)
    }

    interface ILink {
      title: string,
      link: string,
      cardSlug?: string,
      linkSlug?: string
    }

    const links = frontmatter.links;
    const numbered = node.frontmatter.numbered_links;
    const slugifiedLinks = links.map((link: ILink): ILinkButtonProp => ({
      ...link,
      linkSlug: link.title.toLowerCase(),
      cardSlug: frontmatter.slug
    }))
    const cardLinks = ((!numbered)
      ? slugifiedLinks
      : slugifiedLinks.map((link: ILink, i: number): ILink => ({
          ...link,
          title: `${i+1}. ${link.title}`,
        })))


    const cardVisibility = cardIsOpen ? 'visible' : 'hidden'
    const markdonVisibility = showMarkdown ? 'visible' : 'hidden'

    return (
      <Card id={frontmatter.slug}>
        <div ref={myRef} className="w-full">
          <h1></h1> {/* To anchor links to top of cards */}
          <button onClick={onHeroImageClick} className="w-full">
            <HeroImage heroImage={heroImage} altText="featured image" />

            <div className="bg-gray-20">
                <div className="flex max-h-10 flex-row justify-start align-center w-full pl-4 mt-0">
                    <h1 className="font-bold  text-gray-700 text-lg whitespace-nowrap p-1  mt-0.5">
                      {index+1}. {title}
                    </h1>
                    <div className="flex ml-4 mt-1.5">
                      {tags && tags.map((tag: string) => <Tag tag={tag} key={tag} />)}
                    </div>
                </div>
            </div>
          </button>

          <div className={cardVisibility}>
            <div className="flex flex-col justify-start align-center my-4 w-full px-2">
              <div className="text-lg text-center mb-2">{frontmatter.developer}</div>

              {cardLinks?.map((link: any) => (
                <LinkButton title={link.title} link={link.url} key={link.title} cardSlug={link.cardSlug} linkSlug={link.linkSlug}/>
              ))}
              <Toggle
                text="Opettajalle"
                className="pt-4 pl-6"
                onClick={() => {
                  if (!showMarkdown) {
                    analytics.sendEvent('ForTeacher', { cardSlug: frontmatter.slug })
                  }
                  setShowMarkdown(!showMarkdown)
                }}
                isOpen={showMarkdown}
              />

              <div className={`${markdonVisibility}`}>

                <div className={`text-xl text-center mb-14 text-gray-700 mt-8`}>
                  {!frontmatter.time || <MdAccessTime className="inline mb-1" size={23}/>}
                  <div className="inline mx-2 mt-8">{frontmatter.time}</div>

                  <div className="ml-10 inline text-xl text-center text-gray-700">
                    {frontmatter.difficulty}
                  </div>
                </div>

                <MarkdownArea html={node.html} />

                {showMarkdown &&
                  <CommentSection
                    id={`${frontmatter.slug}_comments`}
                    title={frontmatter.slug}
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </Card>
    )
}

export default GameCard
