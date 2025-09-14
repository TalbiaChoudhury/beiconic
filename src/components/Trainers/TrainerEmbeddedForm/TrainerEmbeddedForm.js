"use client";

import React, { useState } from 'react';
import styles from './TrainerEmbeddedForm.module.css';

const TrainerEmbeddedForm = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    experience: '',
    qualifications: '',
    clientBase: '',
    social: '',
    reason: ''
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // A comprehensive list of countries
  const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 
    'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 
    'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 
    'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo, Democratic Republic of the', 
    'Congo, Republic of the', 'Costa Rica', 'Cote d\'Ivoire', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 
    'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 
    'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 
    'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 
    'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 
    'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 
    'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 
    'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar (Burma)', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 
    'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 
    'Palestine State', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 
    'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 
    'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 
    'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 
    'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 
    'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States of America', 
    'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      // Send data to the new trainer-specific API route
      const response = await fetch('/api/trainerSubscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Thank you for applying! We will be in touch soon.');
        // Clear the form on successful submission
        setFormData({
          name: '', email: '', country: '', experience: '', qualifications: '',
          clientBase: '', social: '', reason: ''
        });
      } else {
        const errorData = await response.json();
        setMessage(errorData.error || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setMessage('A network error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Become an Icon</h2>
      <p className={styles.subtitle}>
        Apply to become a Founding Icon - One of the first trainers or athletes to have their own AI digital clone on the Icon app!
      </p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" name="name" placeholder="Name" className={styles.input} value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" className={styles.input} value={formData.email} onChange={handleChange} required />
        <select name="country" className={styles.select} value={formData.country} onChange={handleChange} required >
          <option value="" disabled>Country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        <input type="number" name="experience" placeholder="Years of Coaching Experience" className={styles.input} value={formData.experience} onChange={handleChange} required />
        <input type="text" name="qualifications" placeholder="Fitness qualifications" className={styles.input} value={formData.qualifications} onChange={handleChange} />
        <input type="number" name="clientBase" placeholder="Current Client Base Size" className={styles.input} value={formData.clientBase} onChange={handleChange} required />
        <input type="text" name="social" placeholder="Social Media Handle (Instagram / TikTok)" className={styles.input} value={formData.social} onChange={handleChange} />
        <textarea name="reason" placeholder="Why do you want to be an icon?" className={styles.textarea} value={formData.reason} onChange={handleChange} required />
        <button type="submit" className={styles.button} disabled={loading}>
          {loading ? 'Submitting...' : 'Apply Now'}
        </button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default TrainerEmbeddedForm;
