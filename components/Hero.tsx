"use client";

import Image from "next/image";

import { SearchBar } from "@/components";


const Hero = () => {
 
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const imageLoader = ({ src, width, quality } : any) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }
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
          <Image loader={imageLoader} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw" src="/hero-min.png" alt="hero" fill className="object-contain" priority />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;