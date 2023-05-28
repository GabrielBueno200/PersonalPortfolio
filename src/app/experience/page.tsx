'use client'

import { useState } from 'react'
import PageContent from '../components/PageContent'

import ExperienceCard from '../components/ExperienceCard'

import { educationalExperiences } from '../utils/educationExperiences'
import { professionalExperiences } from '../utils/professionalExperiences'

type ExperienceOptions = 'Professional' | 'Educational'

const Experience = () => {
  const [activeExperienceOption, setActiveExperienceOption] =
    useState<ExperienceOptions>('Professional')

  const handleSetActiveExperienceOption = (
    experienceOption: ExperienceOptions
  ) => setActiveExperienceOption(experienceOption)

  const experiences =
    activeExperienceOption === 'Professional'
      ? professionalExperiences
      : educationalExperiences

  return (
    <PageContent title="Experience">
      <div className="flex h-full">
        <ul className="list-none text-3xl space-y-6 text-primary-green w-5/12 mt-12">
          {['Professional', 'Educational'].map(experienceOption => {
            const isActiveOption = activeExperienceOption === experienceOption

            return (
              <li
                key={experienceOption}
                className={`before:content-['>'] before:mr-2 cursor-pointer ${
                  isActiveOption ? 'text-white-green' : ''
                } hover:text-5xl transition-all w-fit`}
                onClick={() =>
                  handleSetActiveExperienceOption(
                    experienceOption as ExperienceOptions
                  )
                }
              >
                {experienceOption}
              </li>
            )
          })}
        </ul>

        <div className="experiences-container flex-1 pr-3 -mt-3 overflow-auto h-5/6 space-y-8 scrollbar-thin scrollbar-thumb-primary-green scrollbar-track-white-green scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
          {experiences.map(experience => (
            <ExperienceCard
              key={experience.institution}
              experience={experience}
            />
          ))}
        </div>
      </div>
    </PageContent>
  )
}

export default Experience

