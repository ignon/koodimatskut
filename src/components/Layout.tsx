import * as React from 'react'
import { Link } from 'gatsby'
import { MDXProvider } from "@mdx-js/react"
import { getSeason } from '../hooks/useSeasons'

const Layout = ({ pageTitle, children }: {
  pageTitle: string,
  children: React.ReactNode
}) => {

  const backgroundStyle = getSeason() == 'winter'
    ? 'bg-white bg-opacity-80' : ''

  return (
    <div>
      <main className={`max-w-3xl mx-auto flex flex-col ${backgroundStyle}`}>
        {children}
      </main>
    </div>
  )
}
// bg-opacity-80 bg-white
export default Layout
