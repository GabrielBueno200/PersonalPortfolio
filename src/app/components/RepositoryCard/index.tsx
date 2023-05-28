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
      <div className="text-white bg-zinc-900 rounded-sm h-60 p-4 flex flex-col gap-2 space-y-4">
        <div className=" text-white flex justify-between text-xl items-center">
          <h1>{repository.name}</h1>
          <IoMdOpen
            className="cursor-pointer"
            onClick={() => handleSetShowRepositoryModal(true)}
          />
        </div>
        <span className="flex-1 overflow-auto pr-2 scrollbar-thin scrollbar-thumb-primary-green scrollbar-track-white-green scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
          {repository.description}
        </span>
        <button
          className="bg-primary-green text-white hover:opacity-75 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex items-center gap-2 justify-center"
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

