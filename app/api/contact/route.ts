import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { name, email, subject, message } = body as Record<string, string>

  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
  }

  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_EMAIL_TO
  const from = process.env.CONTACT_EMAIL_FROM

  if (!apiKey || !to || !from) {
    console.error('[contact] Missing RESEND_API_KEY, CONTACT_EMAIL_TO, or CONTACT_EMAIL_FROM')
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  const resend = new Resend(apiKey)

  const { error } = await resend.emails.send({
    from,
    to,
    reply_to: email,
    subject: `[Portfolio] ${subject} — ${name}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head><meta charset="utf-8" /></head>
        <body style="margin:0;padding:40px 20px;font-family:sans-serif;background:#0a0a0a;color:#f5f5f0;max-width:600px;">
          <p style="color:#FF4D00;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;margin-bottom:24px;">
            New enquiry via elenavasquez.com
          </p>
          <h2 style="font-size:28px;margin:0 0 24px;color:#f5f5f0;">${subject}</h2>
          <table style="border-collapse:collapse;width:100%;margin-bottom:24px;">
            <tr>
              <td style="padding:8px 0;color:#999;font-size:12px;width:80px;">Name</td>
              <td style="padding:8px 0;color:#f5f5f0;">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#999;font-size:12px;">Email</td>
              <td style="padding:8px 0;"><a href="mailto:${email}" style="color:#FF4D00;">${email}</a></td>
            </tr>
          </table>
          <hr style="border:none;border-top:1px solid #222;margin:24px 0;" />
          <p style="color:#ccc;line-height:1.8;white-space:pre-wrap;">${message}</p>
        </body>
      </html>
    `,
  })

  if (error) {
    console.error('[contact] Resend error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
