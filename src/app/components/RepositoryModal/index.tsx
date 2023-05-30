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
      <div className="fixed left-1/2 top-1/2 z-50 flex w-[90vw] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none lg:w-max">
        <div className="relative mx-auto my-6 w-auto max-w-3xl">
          {/*content*/}
          <div className="relative flex flex-col rounded-lg border-0 bg-zinc-800  shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center justify-between rounded-t border-b border-solid border-primary-green p-5 text-primary-green">
              <h3 className="text-3xl font-semibold">
                {repository.name}
                <small className="block text-xs text-white-green">
                  {repository.description}
                </small>
              </h3>
              <button
                className=" text-3xl font-semibold leading-none "
                onClick={onClose}
              >
                <span className="block w-6 outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>

            {/*body*/}
            <div className="relative h-3/5 flex-auto overflow-hidden px-6">
              <p className="my-4 max-h-[50vh] max-w-[100vw] overflow-auto pr-3 text-lg leading-relaxed text-white scrollbar-thin scrollbar-track-white-green scrollbar-thumb-primary-green scrollbar-track-rounded-full scrollbar-thumb-rounded-full">
                <div
                  className="prose prose-stone text-white"
                  dangerouslySetInnerHTML={{ __html: processedMarkdownContent }}
                />
              </p>
            </div>

            {/*footer*/}
            <div className="flex items-center justify-end rounded-b p-3">
              <button
                className="mb-1 mr-1 flex items-center justify-center gap-2 rounded bg-primary-green px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:opacity-75 hover:shadow-lg focus:outline-none"
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
        className="backdrop fixed inset-0 z-40 bg-black opacity-50"
        onClick={onClose}
      />
    </>
  )
}

