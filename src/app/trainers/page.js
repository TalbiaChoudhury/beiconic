'use client';

import React from 'react';

import FadeInHero from '@/components/Animations/FadeIn/FadeInHero.js';
import Hero from '../../components/Trainers/Hero/Hero.js'

const Trainers = () => {
  return (
    <div>
      <FadeInHero>
        <Hero />
      </FadeInHero>
    </div>
  );
};

export default Trainers;