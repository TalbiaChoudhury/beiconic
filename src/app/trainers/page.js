'use client';

import React from 'react';

import FadeInHero from '@/components/Animations/FadeIn/FadeInHero.js';
import Hero from '../../components/Trainers/Hero/Hero.js'
import FadeIn from '@/components/Animations/FadeIn/FadeIn.js';
import Footer from '@/components/Trainers/Footer/Footer.js';

const Trainers = () => {
  return (
    <div>
      <FadeInHero>
        <Hero />
      </FadeInHero>

      <FadeIn>
        <Footer />
      </FadeIn>
    </div>
  );
};

export default Trainers;