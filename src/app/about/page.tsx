'use client'

import PageContent from '../components/PageContent'
import SkillsContainer from '../components/SkillsContainer'
import { Skill } from '../types/skill'

const backendSkills: Skill[] = require('./backendSkills.json')
const frontendSkills: Skill[] = require('./frontendSkills.json')
const databaseSkills: Skill[] = require('./databaseSkills.json')

const About = () => {
  return (
    <PageContent title="About">
      <div className="flex gap-36 max-h-full">
        <div className="who-container w-5/12 self-center">
          <h1 className="text-primary-green font-semibold text-3xl mb-6">
            Who's this guy?
          </h1>
          <span className="text-white text-2xl">
            I'm a brazillian developer with experience in backend and frontend.
            However, I'm currently working working as .NET backend developer to
            the FIAP university. Programming is my passion, so I love to learn
            all kind of language, framework or anything related to technology.
          </span>
        </div>

        <div className="skills-container flex-1 -mt-12 max-h-full">
          <h1 className="text-primary-green font-semibold text-3xl mb-6">
            Skills
          </h1>

          <div className="space-y-3">
            <SkillsContainer category="backend" skills={backendSkills} />
            <SkillsContainer category="frontend" skills={frontendSkills} />
            <SkillsContainer category="database" skills={databaseSkills} />
          </div>
        </div>
      </div>
    </PageContent>
  )
}

export default About

