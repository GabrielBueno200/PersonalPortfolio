'use client'

import { Skill } from '@/app/types/skill'
import _ from 'lodash'
import Image from 'next/image'

interface ISkillsContainerProps {
  category: 'frontend' | 'backend' | 'database'
  skills: Skill[]
}

const SkillsContainer = ({ category, skills }: ISkillsContainerProps) => (
  <div className="container">
    <h2 className="text-xl text-primary-green">{_.capitalize(category)}</h2>
    <div className="mt-2 flex flex-wrap gap-4 md:gap-5">
      {skills.map(skill => (
        <div className="flex max-w-[50px] flex-col items-center gap-2 text-center text-xs text-white">
          <Image
            key={skill.name}
            src={skill.imagePath}
            width={60}
            height={60}
            alt={skill.name}
            className="hover:rotate-360 transition-transform duration-700 ease-in-out"
          />
          {_.upperCase(skill.name)}
        </div>
      ))}
    </div>
  </div>
)

export default SkillsContainer

