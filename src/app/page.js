"use client";

import Hero from "../components/Hero/Hero";
import FadeIn from "../components/FadeIn/FadeIn";
import FadeInHero from "../components/FadeIn/FadeInHero";
import CarouselSlides from '../components/CarouselSlides/CarouselSlides';
import ThreeCards from '../components/ThreeCards/ThreeCards';
import Pricing from '../components/Pricing/Pricing';

export default function Home() {
  const handleDemoClick = () => {
    alert("Button clicked!");
  };

  return (
    <>
      <FadeInHero>
          <Hero />
      </FadeInHero>

      <FadeIn>
        <CarouselSlides />
      </FadeIn>

      <FadeIn>
        <ThreeCards />
      </FadeIn>

      <FadeIn>
        <Pricing />
      </FadeIn>
    </>
  );
}