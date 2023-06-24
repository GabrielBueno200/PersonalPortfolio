'use client'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import ContactForm from '../components/ContactForm'
import PageContent from '../components/PageContent'

const Contact = () => (
  <PageContent title="Contact">
    <div className="lg:flex lg:gap-4 max-h-full">
      <div className="platforms-container h-full lg:w-1/2">
        <span className="text-xl text-white">
          If you want to know more about me or my projects you can find me on
          platforms below
        </span>

        <div className="mt-10 flex flex-col items-center space-y-4 lg:mt-20 lg:block">
          <span className="linkedin flex items-center gap-2 text-xl transition-all lg:text-2xl lg:hover:text-3xl">
            <FaLinkedin color="#0A66C2" size={40} />
            <a
              href="https://www.linkedin.com/in/gabriel-vr-bueno/"
              target="_blank"
              className="font-extrabold text-white transition-all hover:text-gray-500"
            >
              /gabriel-vr-bueno
            </a>
          </span>

          <span className="github flex items-center gap-2 text-xl transition-all lg:text-2xl lg:hover:text-3xl">
            <FaGithub color="#FFF" size={40} />
            <a
              href="https://github.com/GabrielBueno200"
              target="_blank"
              className="font-extrabold text-white transition-all hover:text-gray-500"
            >
              /GabrielBueno200
            </a>
          </span>
        </div>
      </div>

      <div className="form-container max-h-[90] flex flex-col justify-center lg:w-1/2 overflow-auto scrollbar-thin scrollbar-track-white-green scrollbar-thumb-primary-green scrollbar-track-rounded-full scrollbar-thumb-rounded-full p-4">
        <span className="py-3 text-center text-2xl text-primary-green lg:py-0 lg:text-left lg:text-xl">
          Have a question or want to work together?
        </span>
        <ContactForm />
      </div>
    </div>
  </PageContent>
)

export default Contact

