import * as React from 'react'

const LinkButton = ({ text, url }: {
  text: string
  url: string
}) => {
  return (
      <a
        href={url}
        target="_blank"
        className={`
          my-2 py-2 grow
          bg-gray-300 hover:bg-gray-400 text-gray-800
          font-bold  text-center px-4 mb-1 rounded-md
        `}
      >
        {text}
      </a>
  )
}

export default LinkButton
