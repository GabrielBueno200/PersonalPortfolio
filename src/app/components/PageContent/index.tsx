'use client'

import { ReactNode } from 'react'

interface IPageContentProps {
  title: string
  children: ReactNode
}

const PageContent = ({ title, children }: IPageContentProps) => (
  <main className="bg-secondary-green flex items-center justify-center overflow-hidden">
    <div className="bg-black w-11/12 h-80vh p-8">
      <span className="w-fit inline-block mb-4">
        <h1 className="text-primary-green text-5xl font-extrabold mb-3 w-fit inline-block typewriter">
          {title}
        </h1>
      </span>
      {children}
    </div>
  </main>
)

export default PageContent

