"use client";

import Image from "next/image";

import { CustomButton, SearchBar } from "@/components";


const Hero = () => {
 
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
      <h1 className="hero__title">Research a Vehicle By VIN Number</h1>
        <p className="hero__subtitle">
          Validate your VIN from Govt Sources & Receive An Instant Vehicle History Report Now
        </p>
        <div className="mt-7">
        < SearchBar />
        </div>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;