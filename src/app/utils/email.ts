import { EmailRequest } from '../types/emailRequest'

export const sendEmailAsync = async (emailRequest: EmailRequest) => {
  const response = await fetch('/api/sendEmail', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(emailRequest)
  })

  return {
    status: response.status,
    content: await response.json()
  }
}

