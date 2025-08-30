import React, { useEffect, useRef, useState } from "react";
import heroImage1 from "../assets/mediConnect1.png"; 
import heroImage2 from "../assets/mediConnect2.png"; 
import heroImage3 from "../assets/mediConnect3.png"; 

import "./Hero.css"

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const images = [heroImage1, heroImage2, heroImage3];

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Scroll carousel when index changes
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: carouselRef.current.offsetWidth * currentIndex,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);



  return (
    <section className="hero">
      <div className="hero-content">
        <div className="carousel-container" ref={carouselRef}>
          {images.map((img, index) => (
            <div className="carousel-card" key={index}>
              <img src={img} alt={`Slide ${index}`} className="hero-image" />
            </div>
          ))}
        </div>
        <h1 className="hero-title">Welcome to Medi Connect</h1>
        <p className="hero-text">
          Medi Connect bridges the gap between patients and doctors, making
          healthcare appointments and consultations simple, fast, and reliable.
        </p>
      </div>
    </section>
  );
}

export default Hero;
