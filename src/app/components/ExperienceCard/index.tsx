import { Experience } from '@/app/types/experience'
import Image from 'next/image'

interface IExperienceCardProps {
  experience: Experience
}

const ExperienceCard = ({ experience }: IExperienceCardProps) => {
  return (
    <div className="experience-card space-y-4">
      <div className="flex max-h-full flex-col items-center gap-4 md:flex-row md:items-start">
        <Image
          src={experience.institutionImagePath}
          alt={experience.institution}
          width={80}
          height={80}
          className="rounded-full border-2 border-gray-900"
        />
        <div className="general-info flex flex-col">
          <span className="font-bold text-primary-green">
            {experience.position}
          </span>
          <span className="font-bold text-white-green">
            {experience.institution}
          </span>
          <span className="font-bold text-zinc-500">{experience.period}</span>
        </div>
      </div>

      <ul className="p-4 text-white md:p-0">
        {experience.descriptionTopics.map((topic, idx) => (
          <li key={idx} className="before:mr-2 before:content-['>']">
            {topic}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ExperienceCard

