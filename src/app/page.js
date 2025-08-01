"use client";

import Hero from "../components/Home/Hero/Hero";
import FadeIn from "../components/Animations/FadeIn/FadeIn";
import FadeInHero from "../components/Animations/FadeIn/FadeInHero";
import CarouselSlides from '../components/Home/CarouselSlides/CarouselSlides'
import ThreeCards from '../components/Home/ThreeCards/ThreeCards';
import Pricing from '../components/Home/Pricing/Pricing';

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