'use client'

import { useState } from 'react'
import { BsFileTextFill } from 'react-icons/bs'
import PageContent from '../components/PageContent'

import ExperienceCard from '../components/ExperienceCard'

import { downloadCvPdfFile } from '../utils/downloadCv'
import {
  educationalExperiences,
  professionalExperiences
} from '../utils/experiences'

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
        <div className="space-y-4 w-full -mt-4">
          <button
            onClick={downloadCvPdfFile}
            className="w-fit bg-primary-green disabled:opacity-25 text-white hover:opacity-75 font-bold uppercase text-sm px-6 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 flex gap-2 items-center"
          >
            <BsFileTextFill /> My CV
          </button>
          <div className="experiences-container border-primary-green/20 p-10 border-2 rounded-md flex-1 pr-3 -mt-3 overflow-auto h-[75%] space-y-8 scrollbar-thin scrollbar-thumb-primary-green scrollbar-track-white-green scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
            {experiences.map(experience => (
              <ExperienceCard
                key={experience.institution}
                experience={experience}
              />
            ))}
          </div>
        </div>
      </div>
    </PageContent>
  )
}

export default Experience

