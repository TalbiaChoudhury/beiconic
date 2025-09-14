// /src/app/api/contact/route.js
export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const isDev = process.env.NODE_ENV !== 'production';

export async function POST(req) {
  try {
    const { name, email, phone, reason, company } = await req.json();

    // simple honeypot
    if (company) return NextResponse.json({ ok: true });

    if (!name || !email || !reason) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    // --- Build transporter ---
    let transporter;
    let usedEthereal = false;

    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure:
          process.env.SMTP_SECURE === 'true' ||
          Number(process.env.SMTP_PORT) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        logger: isDev,
        debug: isDev,
      });
    } else if (isDev) {
      // Dev fallback: Ethereal test inbox (no real email sent)
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: { user: testAccount.user, pass: testAccount.pass },
      });
      usedEthereal = true;
      console.log('Using Ethereal test SMTP credentials:', testAccount);
    } else {
      return NextResponse.json(
        { error: 'Email not configured on server.' },
        { status: 500 }
      );
    }

    // Catch auth/port issues up front
    await transporter.verify();

    const to = process.env.CONTACT_TO || 'contact@beiconic.app';
    const from = process.env.CONTACT_FROM || process.env.SMTP_USER;

    const esc = (s = '') =>
      s
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');

    const info = await transporter.sendMail({
      from,
      to,
      subject: `New contact form submission from ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${esc(name)}</p>
        <p><strong>Email:</strong> ${esc(email)}</p>
        <p><strong>Phone:</strong> ${esc(phone || '—')}</p>
        <p><strong>Reason:</strong></p>
        <p style="white-space:pre-wrap">${esc(reason)}</p>
      `,
    });

    const payload = { ok: true };
    if (usedEthereal) {
      const previewUrl = nodemailer.getTestMessageUrl(info);
      console.log('Ethereal preview URL:', previewUrl);
      payload.message =
        'Sent using Ethereal test SMTP (dev). Check server logs for preview URL.';
      payload.previewUrl = previewUrl; // handy in dev tools
    }

    return NextResponse.json(payload);
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json(
      { error: isDev ? `Mailer error: ${err.message}` : 'Failed to send message.' },
      { status: 500 }
    );
  }
}
