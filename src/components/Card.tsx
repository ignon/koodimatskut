import * as React from 'react'

const Card = ({ children, ref }: {
  children: React.ReactNode,
  ref?: React.RefObject<HTMLDivElement>
}) => {

    return (
      <div
        ref={ref}
        className={`
          flex flex-col items-center
          mb-6 min-w-full
          rounded-2xl
          md:rounded-3xl
          shadow-xl shadow-black/40 overflow-hidden
          bg-white
        `}>

        {children}
      </div>
  )
}

export default Card;
