import * as React from 'react'

const MarkdownArea = ({ html }: {
  html: any
}) => (
  <div
    className="markdown-area mx-5 mt-10"
    dangerouslySetInnerHTML={{ __html: html }}
  />
)


export default MarkdownArea
