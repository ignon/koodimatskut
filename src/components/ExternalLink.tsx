import * as React from 'react'
import { MdNorthEast } from 'react-icons/md'

const ExternalLink = ({ text, url, className='' }: {
  text: string,
  url: string,
  className: string
}) => {

  const defaultStyles = 'text-2xl text-gray-700 hover:text-gray-400 flex-none'

  return (
    <a
      href={url}
      target='_blank'
      className={`${defaultStyles} ${className}`}
    >
      {text}<MdNorthEast className="inline-block mb-1 ml-1"/>
    </a>
  )
}


export default ExternalLink
