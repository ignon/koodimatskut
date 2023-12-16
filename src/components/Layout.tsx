import * as React from 'react'
import { Link } from 'gatsby'
import { MDXProvider } from "@mdx-js/react"

const Layout = ({ pageTitle, children }: {
  pageTitle: string,
  children: React.ReactNode
}) => {
  return (
    <div>
      <main className="max-w-3xl mx-auto flex flex-col bg-white bg-opacity-80">
        {children}
      </main>
    </div>
  )
}

export default Layout
