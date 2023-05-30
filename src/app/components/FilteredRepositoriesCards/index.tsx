'use client'

import Select from '@/app/common/Select'
import _ from 'lodash'
import { useState } from 'react'
import RepositoryCard from '../RepositoryCard'

interface IFilteredRepositoriesCardsProps {
  repositories: Repository[]
}

const FilteredRepositoriesCards = ({
  repositories
}: IFilteredRepositoriesCardsProps) => {
  const [activeLanguage, setActiveLanguage] = useState<string>('')

  const languages = [
    'All',
    ...repositories
      .map(repo => repo.language)
      .filter(language => language !== null)
  ]

  const languagesOptions = _.uniq(languages).map((language, idx) => ({
    value: idx,
    label: language
  }))

  const handleSetActiveLanguage = (language: string) =>
    setActiveLanguage(language)

  const filteredRepositories =
    activeLanguage === 'All' || !activeLanguage
      ? repositories
      : repositories.filter(repo => repo.language === activeLanguage)

  const filteredAndOrderedRepositories = _.orderBy(
    filteredRepositories,
    'createdAt',
    'desc'
  )

  return (
    <>
      <Select
        value={{
          label: !!activeLanguage ? activeLanguage : 'Select a language...'
        }}
        onChange={({ label: language }: any) =>
          handleSetActiveLanguage(language)
        }
        options={languagesOptions}
        className="lg:w-72 ml-auto my-2"
      />

      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-4 lg:gap-5 overflow-auto lg:max-h-[65%] mt-6 lg:pr-2 scrollbar-thin scrollbar-thumb-primary-green scrollbar-track-white-green scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        {filteredAndOrderedRepositories.map(repo => (
          <RepositoryCard key={repo.id} repository={repo} />
        ))}
      </div>
    </>
  )
}

export default FilteredRepositoriesCards

