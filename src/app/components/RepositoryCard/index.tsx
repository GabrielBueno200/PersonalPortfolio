'use client'

import { useState } from 'react'
import { IoLogoGithub, IoMdOpen } from 'react-icons/io'
import { RepositoryModal } from '../RepositoryModal'

interface IRepositoryCardProps {
  repository: Repository
}

const RepositoryCard = ({ repository }: IRepositoryCardProps) => {
  const [showRepositoryModal, setShowRepositoryModal] = useState(false)

  const handleSetShowRepositoryModal = (show: boolean) =>
    setShowRepositoryModal(show)

  return (
    <>
      <div className="flex h-72 flex-col gap-2 space-y-4 rounded-sm bg-zinc-900 p-4 text-white">
        <div className=" flex justify-between text-xl text-white">
          <div>
            <h1 className="truncate text-sm font-bold">{repository.name}</h1>
            <small className="text-xs text-white-green">
              {repository.language}
            </small>
          </div>
          <IoMdOpen
            className="invisible mt-1.5 cursor-pointer transition-all hover:fill-zinc-500 md:visible"
            onClick={() => handleSetShowRepositoryModal(true)}
          />
        </div>

        <span className="flex-1 overflow-auto pr-2 scrollbar-thin scrollbar-track-white-green scrollbar-thumb-primary-green scrollbar-track-rounded-full scrollbar-thumb-rounded-full">
          {repository.description}
        </span>

        <button
          className="mb-1 mr-1 flex items-center justify-center gap-2 rounded bg-primary-green px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:opacity-75 hover:shadow-lg focus:outline-none"
          type="button"
          onClick={() => open(repository.url)}
        >
          <IoLogoGithub className="text-2xl" />
          Check on Github
        </button>
      </div>

      {showRepositoryModal && (
        <RepositoryModal
          repository={repository}
          onClose={() => handleSetShowRepositoryModal(false)}
        />
      )}
    </>
  )
}

export default RepositoryCard

