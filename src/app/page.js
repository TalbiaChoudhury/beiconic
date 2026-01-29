"use client";

import { useEffect } from "react";
import Hero from "../components/Home/Hero/Hero";
import FadeIn from "../components/Animations/FadeIn/FadeIn";
import FadeInHero from "../components/Animations/FadeIn/FadeInHero";
import CarouselSlides from '../components/Home/CarouselSlides/CarouselSlides'
import ThreeCards from '../components/Home/ThreeCards/ThreeCards';
import Pricing from '../components/Home/Pricing/Pricing';
import Footer from '../components/Home/Footer/Footer';

export default function Home() {
  useEffect(() => {
    document.title = "Iconn | Home";
  }, []);

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

      <FadeIn>
        <Footer />
      </FadeIn>
    </>
  );
}
