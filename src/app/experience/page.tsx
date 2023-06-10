'use client'

import { useState } from 'react'
import { BsFileTextFill } from 'react-icons/bs'
import PageContent from '../components/PageContent'

import ExperienceCard from '../components/ExperienceCard'

import VerticalStepBar from '../common/VerticalStepBar'
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
      <div className="h-full lg:flex">
        <ul className="mt-6 w-full list-none space-y-4 text-2xl text-primary-green lg:mt-12 lg:block lg:w-5/12 lg:space-y-6 lg:text-3xl">
          {['Professional', 'Educational'].map(experienceOption => {
            const isActiveOption = activeExperienceOption === experienceOption

            return (
              <li
                key={experienceOption}
                className={`cursor-pointer before:mr-2 before:content-['>'] ${
                  isActiveOption ? 'text-white-green' : ''
                } w-fit select-none transition-all lg:hover:text-5xl`}
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
        <div className="mt-6 w-full space-y-4 pb-10 lg:-mt-4 lg:pb-0">
          <button
            onClick={downloadCvPdfFile}
            className="flex w-fit items-center gap-2 rounded bg-primary-green px-6 py-1 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:opacity-75 hover:shadow-lg focus:outline-none disabled:opacity-25"
          >
            <BsFileTextFill /> My CV
          </button>
          <div className="experiences-container -mt-3 h-[75%] overflow-auto rounded-md border-2 border-primary-green/20 p-3 pr-3 scrollbar-thin scrollbar-track-white-green scrollbar-thumb-primary-green scrollbar-track-rounded-full scrollbar-thumb-rounded-full md:p-8">
            <VerticalStepBar
              steps={experiences.map(experience => (
                <ExperienceCard
                  key={experience.institution}
                  experience={experience}
                />
              ))}
            />
          </div>
        </div>
      </div>
    </PageContent>
  )
}

export default Experience

