import { Experience } from '@/app/types/experience'
import Image from 'next/image'

interface IExperienceCardProps {
  experience: Experience
}

const ExperienceCard = ({ experience }: IExperienceCardProps) => {
  return (
    <div className="experience-card space-y-4">
      <div className="flex gap-4">
        <Image
          src={experience.institutionImagePath}
          alt={experience.institution}
          width={80}
          height={80}
          className="rounded-full border-gray-900 border-2"
        />
        <div className="general-info flex flex-col">
          <span className="text-primary-green font-bold">
            {experience.position}
          </span>
          <span className="text-white-green font-bold">
            {experience.institution}
          </span>
          <span className="text-zinc-500 font-bold">{experience.period}</span>
        </div>
      </div>

      <ul className="text-white">
        {experience.descriptionTopics.map((topic, idx) => (
          <li key={idx} className="before:content-['>'] before:mr-2">
            {topic}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ExperienceCard

