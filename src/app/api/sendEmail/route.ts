import _ from 'lodash'
import nodemailer from 'nodemailer'
import { EmailRequest } from '../../types/emailRequest'

export async function POST(req: Request) {
  const { senderName, senderEmail, message } =
    (await req.json()) as EmailRequest

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.APP_EMAIL,
      pass: process.env.APP_EMAIL_PASSWORD
    }
  })

  try {
    await transporter.sendMail({
      from: process.env.APP_EMAIL,
      to: process.env.EMAIL_RECEIVER,
      subject: `Portfolio: Message from ${senderName}`,
      html: `
        <span>${_.capitalize(
          senderName
        )} (<strong>${senderEmail}</strong>) visualized your portfolio and has a message to you:</span>

        <p><strong>${senderName}</strong>: ${message}</p>
      `
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Could not sent email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  return new Response(
    JSON.stringify({
      message: "Email sent successfully! I'll answer you as soon as possible"
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }
  )
}

