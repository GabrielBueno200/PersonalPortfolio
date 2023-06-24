'use client'

import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import MatrixRain from '../MatrixRain'

interface IPageContentProps {
  title: string
  children: ReactNode
}

const PageContent = ({ title, children }: IPageContentProps) => (
  <>
    <main className="relative z-10 flex items-center justify-center bg-secondary-green/60">
      <div className="h-[85vh] w-11/12 overflow-y-scroll bg-black p-8 scrollbar-thin scrollbar-track-white-green scrollbar-thumb-primary-green scrollbar-track-rounded-full scrollbar-thumb-rounded-full lg:overflow-hidden">
        <span className="mb-2 inline-block w-fit">
          <h1 className="typewriter mb-3 inline-block w-fit text-5xl font-extrabold text-primary-green">
            {title}
          </h1>
        </span>
        <div className="h-[90%] py-3">{children}</div>
      </div>
      <ToastContainer />
    </main>
    <MatrixRain opacity={55} />
  </>
)

export default PageContent

