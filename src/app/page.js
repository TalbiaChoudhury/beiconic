"use client";

import Hero from "../components/Hero/Hero";
import SideBySide from "../components/SideBySide/SideBySide";
import FadeIn from "../components/FadeIn/FadeIn";
import FadeInHero from "../components/FadeIn/FadeInHero";
import logo from "../../public/assets/images/logo.png";
import mike from "../../public/assets/images/mike.jpeg";
import Pricing from "@/components/Pricing/Pricing";
import gym1 from "../../public/assets/images/gym1.jpg";
import gym2 from "../../public/assets/images/gym2.jpg";

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
        <SideBySide
          imagePosition="right"
          header="Finally, a Plan That Actually Listens"
          text="Your AI coach isn't just a list of exercises. It's a dynamic conversation. Tell it how you're feeling, what equipment you have, or if you're short on time. It will adapt your plan on the spot, just like a real personal trainer would."
          buttonLabel="Learn More"
          onButtonClick={handleDemoClick}
          imageSrc={gym1}
          imageAlt="Placeholder image"
        />
      </FadeIn>

      <FadeIn>
        <SideBySide
          imagePosition="left"
          header="Find the Perfect Coach for Your Style"
          bulletPoints={[
            "Testing bullet point number 1",
            "Testing an incredibly long bullet point that should wrap to the next line if it exceeds the width of the container",
          ]}
          listType="number"
          imageSrc={gym2}
          imageAlt="Placeholder image"
        />
      </FadeIn>

      <FadeIn>
        <Pricing />
      </FadeIn>
    </>
  );
}