import * as React from 'react'
import analytics from '../analytics'

export interface ILinkButtonProp {
  title: string,
  link: string,
  linkSlug: string,
  cardSlug: string
}

const LinkButton = ({ title, link, linkSlug, cardSlug }: ILinkButtonProp) => {
  return (
      <a
        href={link}
        target="_blank"
        className={`
          my-2 py-2 grow
          bg-gray-300 hover:bg-gray-400 text-gray-800
          font-bold  text-center px-4 mb-1 rounded-md
        `}
        onClick={() => {
          analytics.sendEvent('LinkClick', {
            linkSlug,
            cardSlug,
            linkPath: `${cardSlug} - ${linkSlug}`
          })
        }}
      >
        {title}
      </a>
  )
}

export default LinkButton
