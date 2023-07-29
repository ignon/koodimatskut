import React from 'react'
import { ReactCusdis as Cusdis } from 'react-cusdis'

const Comments = ({ id, title, className }: {
  title: string,
  id: string,
  className: string
}) => {
  return (
      <div className={className}>
        <Cusdis
            attrs={{
              host: 'https://cusdis.com',
              appId: '6ca712b3-4084-4592-817f-1fb4c7125e8e',
              pageId: id,
              pageTitle: title,
              pageUrl: `https://koodimatskut.fi/${id}`
            }}
          />
      </div>
  )
}

export default Comments
