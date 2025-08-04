'use client';

import React from 'react';
import { useEffect } from 'react';

import FadeInHero from '@/components/Animations/FadeIn/FadeInHero.js';
import Hero from '../../components/Trainers/Hero/Hero.js'
import FadeIn from '@/components/Animations/FadeIn/FadeIn.js';
import Footer from '@/components/Trainers/Footer/Footer.js';
import CarouselSlides from '@/components/Trainers/CarouselSlides/CarouselSlides.js';
import AdditionalParagraph from '@/components/Trainers/Hero/AdditionalParagraph/AdditionalParagraph.js';
import ModularCards from '@/components/Trainers/ModularCards/ModularCards.js';
import Collage from '@/components/Trainers/Collage/Collage.js';

const Trainers = () => {
  useEffect(() => {
      document.title = "Icon | Trainers";
    }, []);

  return (
    <div>
      <FadeInHero>
        <Hero />
      </FadeInHero>

      <FadeIn>
        <AdditionalParagraph />
      </FadeIn>

      <FadeIn>
        <CarouselSlides />
      </FadeIn>

      <FadeIn>
        <ModularCards />
      </FadeIn>

      <FadeIn>
        <Collage />
      </FadeIn>

      <FadeIn>
        <Footer />
      </FadeIn>
    </div>
  );
};

export default Trainers;
