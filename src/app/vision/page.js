"use client";

import VisionCarousel from '@/components/Vision/VisionCarousel';
import { useEffect } from 'react'; // Make sure useEffect is imported

export default function VisionPage() {
  
  // Add this entire useEffect block
  useEffect(() => {
  document.body.classList.add('full-height-page');
  document.documentElement.classList.add('full-height-page'); // Add this line

  return () => {
    document.body.classList.remove('full-height-page');
    document.documentElement.classList.remove('full-height-page'); // Add this line
  };
}, []);

  return (
      <VisionCarousel />
  );
}