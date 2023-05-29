'use client'

import PageContent from '../components/PageContent'
import { EmailRequest } from '../types/emailRequest'

const sendEmailAsync = async (emailRequest: EmailRequest) => {
  const response = await fetch('/api/sendEmail', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(emailRequest)
  })

  console.log(response.json())
}

const Contact = () => <PageContent title="Contact">{}</PageContent>

export default Contact

