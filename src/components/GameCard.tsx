import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import {  getImage } from 'gatsby-plugin-image'

import Tag from '../components/Tag'
import Toggle from '../components/Toggle'
import HeroImage from '../components/HeroImage'
import LinkButton from '../components/LinkButton'
import { MdAccessTime } from 'react-icons/md'

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

    const links = node.frontmatter.links;
    const numbered = node.frontmatter.slug == 'microbit'//node.frontmatter.numbered_links;
    const cardLinks = (!numbered)
      ? links
      : links.map((link: any, i: number) => ({
          ...link,
          title: `${i+1}. ${link.title}`
        }));



    return (
      <Card>
        <div ref={myRef} className="w-full">
          {/* <h2>{node.frontmatter.title}</h2> */}
          <button onClick={onHeroImageClick} className="w-full">
            <HeroImage heroImage={heroImage} altText="featured image" />

            <div className="bg-gray-20">
                <div className="flex max-h-10 flex-row justify-start align-center w-full pl-4 mt-0">
                    <h1 className="font-bold  text-gray-700 text-lg whitespace-nowrap p-1 mt-0.5">
                      {index+1}. {title}
                    </h1>
                    <div className="flex ml-4 mt-1.5">
                      {tags && tags.map((tag: string) => <Tag tag={tag} key={tag} />)}
                    </div>
                </div>
            </div>
          </button>

          {!cardIsOpen ||
          <div className="flex flex-col justify-start align-center my-4 w-full px-2">
            <div className="text-lg text-center mb-2">{frontmatter.developer}</div>

            {cardLinks?.map((link: any) => (
              <LinkButton text={link.title} url={link.url} key={link.title}/>
            ))}
            <Toggle
              text="Opettajalle"
              className="pt-4"
              onClick={() => setShowMarkdown(!showMarkdown)}
              isOpen={showMarkdown}
            />
            {/* <div>{frontmatter.priority}</div> */}

            {!showMarkdown || <div>
              <div className="text-xl text-center mb-2 text-gray-700 mt-10">
                {!frontmatter.time || <MdAccessTime className="inline mb-1" size={23}/>}
                <div className="inline mx-2 mt-8">{frontmatter.time}</div>

                <div className="ml-10 inline text-xl text-center text-gray-700">
                  {frontmatter.difficulty}
                </div>
              </div>

              <MarkdownArea html={node.html} />
            </div>}
          </div>
          }
        </div>
      </Card>
    )
}

export default GameCard
