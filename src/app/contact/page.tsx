'use client'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import ContactForm from '../components/ContactForm'
import PageContent from '../components/PageContent'

const Contact = () => (
  <PageContent title="Contact">
    <div className="flex gap-4">
      <div className="platforms-container w-1/2 h-full">
        <span className="text-white text-xl">
          If you want to know more about me or my projects you can find me on
          platforms below
        </span>

        <div className="mt-20 space-y-4">
          <span className="linkedin text-2xl flex gap-2 items-center">
            <FaLinkedin color="#0A66C2" size={50} />
            <a
              href="https://www.linkedin.com/in/gabriel-vr-bueno/"
              target="_blank"
              className="text-white font-extrabold hover:text-gray-500 transition-all"
            >
              /gabriel-vr-bueno/
            </a>
          </span>

          <span className="github text-2xl flex gap-2 items-center">
            <FaGithub color="#FFF" size={50} />
            <a
              href="https://github.com/GabrielBueno200"
              target="_blank"
              className="text-white font-extrabold hover:text-gray-500 transition-all"
            >
              /GabrielBueno200
            </a>
          </span>
        </div>
      </div>

      <div className="form-container w-1/2 flex flex-col justify-center">
        <span className="text-primary-green text-xl">
          Have a question or want to work together?
        </span>
        <ContactForm />
      </div>
    </div>
  </PageContent>
)

export default Contact

