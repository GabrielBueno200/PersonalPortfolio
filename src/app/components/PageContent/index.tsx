'use client'

import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface IPageContentProps {
  title: string
  children: ReactNode
}

const PageContent = ({ title, children }: IPageContentProps) => (
  <main className="bg-secondary-green flex items-center justify-center">
    <div className="bg-black w-11/12 h-[85vh] p-8 overflow-hidden">
      <span className="w-fit inline-block mb-2">
        <h1 className="text-primary-green text-5xl font-extrabold mb-3 w-fit inline-block typewriter">
          {title}
        </h1>
      </span>
      {children}
    </div>
    <ToastContainer />
  </main>
)

export default PageContent

