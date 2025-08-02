// src/app/api/userSubscribe/route.js

import { NextResponse } from 'next/server';

// This needs to be a CommonJS require because the mailerlite-nodejs library doesn't support ES modules yet.
const MailerLite = require('@mailerlite/mailerlite-nodejs').default;

const mailerlite = new MailerLite({
  api_key: process.env.MAILERLITE_API_KEY,
});

// The function must be named after the HTTP method (e.g., POST, GET)
export async function POST(request) {
  // Get the email from the request body
  const { email } = await request.json();

  if (!email) {
    // Use NextResponse to send a JSON response with a status code
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  const params = {
    email: email,
    groups: [process.env.MAILERLITE_GROUP_ID_USERS], // Your Group ID
  };

  try {
    const response = await mailerlite.subscribers.createOrUpdate(params);
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An error occurred while subscribing.' }, { status: 500 });
  }
}
