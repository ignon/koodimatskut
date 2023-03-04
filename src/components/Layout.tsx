import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ pageTitle, children }: {
  pageTitle: string,
  children: React.ReactNode
}) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main className="max-w-2xl mx-auto flex flex-col">
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout