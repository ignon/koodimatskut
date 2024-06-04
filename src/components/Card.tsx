import * as React from 'react'
import { twMerge } from 'tailwind-merge'

const Card = ({ children, styles='', ref, id }: {
  children: React.ReactNode,
  ref?: React.RefObject<HTMLDivElement>,
  styles?: string,
  id?: string
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
      <section
        id={id}
        ref={ref}
        className={className}
      >
        {children}
      </section>
  )
}

export default Card;
