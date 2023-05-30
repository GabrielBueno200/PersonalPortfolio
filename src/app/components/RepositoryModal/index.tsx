'use client'

interface IRepositoryModalProps {
  onClose(): void
  repository: Repository
}

import { IoLogoGithub } from 'react-icons/io'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remark2rehype from 'remark-rehype'
import { unified } from 'unified'

export const RepositoryModal = ({
  repository,
  onClose
}: IRepositoryModalProps) => {
  const processedMarkdownContent = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remark2rehype)
    .use(rehypeRaw) // Add rehypeRaw processor
    .use(rehypeStringify)
    .processSync(repository.readmeMarkdown)
    .toString()

  return (
    <>
      <div className="w-[90vw] justify-center items-center lg:w-max flex overflow-x-hidden overflow-y-auto fixed z-50 outline-none focus:outline-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col  outline-none focus:outline-none bg-zinc-800">
            {/*header*/}
            <div className="flex justify-between items-center p-5 border-b border-solid border-primary-green text-primary-green rounded-t">
              <h3 className="text-3xl font-semibold">
                {repository.name}
                <small className="text-xs block text-white-green">
                  {repository.description}
                </small>
              </h3>
              <button
                className=" text-3xl leading-none font-semibold "
                onClick={onClose}
              >
                <span className="w-6 block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>

            {/*body*/}
            <div className="relative px-6 flex-auto h-3/5 overflow-hidden max-w-[90vw]">
              <p className="my-4 text-white text-lg leading-relaxed max-h-[50vh] pr-3 overflow-auto scrollbar-thin scrollbar-thumb-primary-green scrollbar-track-white-green scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                <div
                  className="prose prose-stone text-white"
                  dangerouslySetInnerHTML={{ __html: processedMarkdownContent }}
                />
              </p>
            </div>

            {/*footer*/}
            <div className="flex items-center justify-end p-3 rounded-b">
              <button
                className="bg-primary-green text-white hover:opacity-75 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex items-center gap-2 justify-center"
                type="button"
                onClick={() => open(repository.url)}
              >
                <IoLogoGithub className="text-2xl" />
                Check on Github
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="backdrop opacity-50 fixed inset-0 z-40 bg-black"
        onClick={onClose}
      />
    </>
  )
}

