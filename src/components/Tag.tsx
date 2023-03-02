import * as React from 'react'

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

export default Tag
