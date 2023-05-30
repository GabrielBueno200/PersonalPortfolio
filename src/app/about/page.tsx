'use client'

import PageContent from '../components/PageContent'
import SkillsContainer from '../components/SkillsContainer'

import { backendSkills, databaseSkills, frontendSkills } from '../utils/skills'

const About = () => {
  return (
    <PageContent title="About">
      <div className="lg:flex lg:gap-36 max-h-full">
        <div className="who-container w-full lg:w-5/12 lg:self-center">
          <h1 className="text-primary-green font-semibold text-2xl lg:text-3xl mb-6">
            Who's this guy?
          </h1>
          <span className="text-white sm:text-sm lg:text-xl">
            Hi, I'm Gabriel, a 22-year-old software developer. I have a degree
            in Computer Science and I am also an IT technician. I possess skills
            in both backend and frontend software development. My preferred
            stack involves working with C#/.Net Core on the server side and
            React/Typescript on the client side. With approximately three years
            of professional experience as a developer, I'm currently employed as
            a Junior Fullstack Software Developer at Partner Group. I am
            constantly striving to enhance my programming skills and improve my
            knowledge in this field. I prioritize seeking experiences that
            contribute to both my personal and professional growth
          </span>
        </div>

        <div className="skills-container flex-1 mt-6 pb-10 lg:pb-0 lg:-mt-12 max-h-full">
          <h1 className="text-primary-green font-semibold text-2xl lg:text-3xl mb-6">
            Skills
          </h1>

          <div className="space-y-3 sm:mb-5">
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

