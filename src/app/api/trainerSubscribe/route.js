// src/app/api/trainerSubscribe/route.js

import { NextResponse } from 'next/server';

// This needs to be a CommonJS require because the mailerlite-nodejs library doesn't support ES modules yet.
const MailerLite = require('@mailerlite/mailerlite-nodejs').default;

const mailerlite = new MailerLite({
  api_key: process.env.MAILERLITE_API_KEY,
});

export async function POST(request) {
  // Get all the form data from the request body
  const { 
    email, 
    name, 
    country, 
    experience, 
    qualifications, 
    clientBase, 
    social, 
    reason 
  } = await request.json();

  // Basic validation for required fields
  if (!email || !name || !country || !experience || !clientBase || !reason) {
    return NextResponse.json({ error: 'Please fill out all required fields.' }, { status: 400 });
  }

  const params = {
    email,
    groups: [process.env.MAILERLITE_GROUP_ID_TRAINERS], // Your Trainer Group ID
    fields: {
      name,
      country,
      // Map the form data to the correct MailerLite field names
      years_of_coaching_experience: experience,
      fitness_qualifications: qualifications,
      current_client_base_size: clientBase,
      social_media_handle_instagram_tiktok: social,
      why_do_you_want_to_be_an_icon: reason,
    },
    status: "unconfirmed" // Optional: Use "unconfirmed" to require double opt-in
  };

  try {
    const response = await mailerlite.subscribers.createOrUpdate(params);
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error('MailerLite API Error:', error.response?.data || error.message);
    const errorMessage = error.response?.data?.error?.message || 'An error occurred while submitting your application.';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
