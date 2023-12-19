import * as React from 'react'
import { twMerge } from 'tailwind-merge'

const Card = ({ children, styles='', ref }: {
  children: React.ReactNode,
  ref?: React.RefObject<HTMLDivElement>,
  styles?: string
}) => {

    const className = twMerge(`
      flex flex-col
      mb-6 min-w-full
      rounded-3xl
      md:rounded-3xl
      bg-white
      shadow-xl shadow-black/40 overflow-hidden
    `, styles)

    return (
      <div
        ref={ref}
        className={className}
      >
        {children}
      </div>
  )
}

export default Card;
