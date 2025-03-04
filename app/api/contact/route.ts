import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const RECIPIENT_EMAILS = ['tatanvincent@gmail.com', 'louiseleong@gmail.com']

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Please fill in all fields' },
        { status: 400 }
      )
    }

    // Send email to both recipients
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: RECIPIENT_EMAILS.join(', '), // Sends to both emails
      replyTo: email,
      subject: `[Dealitz] New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}

---
This email was sent from the Dealitz contact form.
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
<hr>
<p><small>This email was sent from the Dealitz contact form.</small></p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
} 