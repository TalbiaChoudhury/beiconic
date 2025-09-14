// src/app/api/userSubscribe/route.js

import { NextResponse } from 'next/server';

// This needs to be a CommonJS require because the mailerlite-nodejs library doesn't support ES modules yet.
const MailerLite = require('@mailerlite/mailerlite-nodejs').default;

const mailerlite = new MailerLite({
  api_key: process.env.MAILERLITE_API_KEY,
});

// The function must be named after the HTTP method (e.g., POST, GET)
export async function POST(request) {
  // Get all the form data from the request body
  const { email, name, country, socialMedia } = await request.json();

  if (!email || !name || !country) {
    // Use NextResponse to send a JSON response with a status code
    return NextResponse.json({ error: 'Email, Name, and Country are required' }, { status: 400 });
  }

  const params = {
    email,
    groups: [process.env.MAILERLITE_GROUP_ID_USERS], // Your Group ID
    fields: {
      name,
      country,
      // Make sure this field key matches exactly what you have in MailerLite
      social_media_handle_instagram_tiktok: socialMedia, 
    },
  };

  try {
    const response = await mailerlite.subscribers.createOrUpdate(params);
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error(error);
    // Provide more specific error info if available from the MailerLite response
    const errorMessage = error.response?.data?.error?.message || 'An error occurred while subscribing.';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
