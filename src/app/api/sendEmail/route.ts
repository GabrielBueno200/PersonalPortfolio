import nodemailer from 'nodemailer'
import _ from 'lodash'
import { EmailRequest } from '../../types/emailRequest'

export async function POST(req: Request){
  const { senderName, senderEmail, message } = await req.json() as EmailRequest

  const from = process.env.EMAIL_SENDER
  const to = process.env.EMAIL_RECEIVER
  const subject = `Portfolio: Message from ${senderName}`
  const html = `
      <span>${_.capitalize(senderName)} (<strong>${senderEmail}</strong>) visualized your repository and has a message to you:</span>

      <p><strong>${senderName}</strong>: ${message}</p>
  `

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: from,
      pass: process.env.EMAIL_SENDER_PASSWORD,
    },
  })

  await transporter.sendMail({
    from,
    to,
    subject,
    html
  })

  return new Response(JSON.stringify({message:'Email sent successfully!'}) )
}
