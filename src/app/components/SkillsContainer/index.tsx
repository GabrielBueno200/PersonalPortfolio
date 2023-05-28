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
    <h2 className="text-primary-green text-xl">{_.capitalize(category)}</h2>
    <div className="flex gap-4 mt-2">
      {skills.map(skill => (
        <div className="flex flex-col gap-2 text-white items-center text-sm">
          <Image
            key={skill.name}
            src={skill.imagePath}
            width={60}
            height={60}
            alt={skill.name}
          />
          {_.upperCase(skill.name)}
        </div>
      ))}
    </div>
  </div>
)

export default SkillsContainer

