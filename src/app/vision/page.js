'use client';

import React from 'react'; // Added React import for clarity
import { useEffect } from 'react';

import VisionCarousel from '@/components/Vision/VisionCarousel';
import FadeIn from '@/components/Animations/FadeIn/FadeIn.js'; // Import FadeIn
// Removed: import Footer from '@/components/Home/Footer/Footer.js'; // Import Footer

export default function VisionPage() {
  // Add this entire useEffect block
  useEffect(() => {
    document.title = "Icon | Vision"; // Set page title
    document.body.classList.add('full-height-page');
    document.documentElement.classList.add('full-height-page'); // Add this line

    return () => {
      document.body.classList.remove('full-height-page');
      document.documentElement.classList.remove('full-height-page'); // Add this line
    };
  }, []);

  return (
    <div> {/* Main wrapper div */}
      <FadeIn>
        <VisionCarousel />
      </FadeIn>

      {/* Removed: <FadeIn><Footer /></FadeIn> */}
    </div>
  );
}
