import * as React from 'react'

const Card = ({ children }: {
  children: any
}) => {

    return (
      <div
        className={`
          flex flex-col items-center
          mb-6 min-w-full rounded-3xl
          shadow-xl shadow-black/40 overflow-hidden
          bg-white
        `}>

        {children}
      </div>
  )
}

export default Card;
