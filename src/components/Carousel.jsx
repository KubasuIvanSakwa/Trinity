import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ch_1 from "../assets/ch_1.jpg"
import ch_2 from "../assets/ch_3.avif"

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [animateText, setAnimateText] = useState(true);

  // Sample images with different text content for each slide
  const slides = [
  {
    id: 1,
    image: `${ch_1}`,
    alt: "Church interior",
    title: "OUR MISSION",
    subtitle: "Growing DEEP to Reach WIDE - transforming lives through Christ",
    buttonText: "JOIN US"
  },
  {
    id: 2,
    image: `${ch_2}`,
    alt: "Community worship",
    title: "COMMUNITY",
    subtitle: "A spiritual family for Adults, Youth & Children",
    buttonText: "GET INVOLVED"
  },
];


  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
      
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, slides.length]);

  // Trigger text animation when slide changes
  useEffect(() => {
    setAnimateText(false);
    const timer = setTimeout(() => {
      setAnimateText(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <>
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .fade-in-title {
          animation: ${animateText ? 'slideInRight 1s ease-out 0.3s forwards' : 'none'};
          opacity: ${animateText ? '0' : '0'};
          transition: opacity 0.2s ease-out;
        }

        .fade-in-subtitle {
          animation: ${animateText ? 'slideInRight 1s ease-out 0.8s forwards' : 'none'};
          opacity: ${animateText ? '0' : '0'};
          transition: opacity 0.2s ease-out;
        }

        .fade-in-button {
          animation: ${animateText ? 'slideInRight 1s ease-out 1.3s forwards' : 'none'};
          opacity: ${animateText ? '0' : '0'};
          transition: opacity 0.2s ease-out;
        }
      `}</style>
      
      <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-[120vh] overflow-hidden">
        {/* Carousel wrapper */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              {/* Optional overlay for better text readability */}
              <div className="absolute inset-0 bg-black/30" />
            </div>
          ))}

          {/* Text Content Overlay - Dynamic content based on current slide */}
          <div className={`absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4 sm:px-6 lg:px-8 transition-opacity duration-200 ${animateText ? 'opacity-100' : 'opacity-0'}`} style={{ paddingTop: '10vh' }}>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 fade-in-title leading-tight">
              {currentSlideData.title}
            </h1>
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white/90 mb-8 sm:mb-10 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl fade-in-subtitle leading-relaxed">
              {currentSlideData.subtitle}
            </p>
            <button className="text-slate-800 font-bold cursor-pointer bg-[#fff172] hover:bg-[#ddda12] py-3 px-6 sm:py-4 sm:px-8 md:px-10 text-sm sm:text-base md:text-lg uppercase tracking-wider transition-all duration-300 transform hover:scale-105 fade-in-button rounded-sm">
              {currentSlideData.buttonText}
            </button>
          </div>
        </div>

        {/* Slider indicators */}
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-6 sm:bottom-8 left-1/2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentSlide
                  ? 'bg-[#fff172] hover:bg-[#ddda12]  scale-110 sm:scale-125 shadow-lg shadow-orange-500/60'
                  : 'bg-white/50 hover:bg-white/80 hover:shadow-md hover:shadow-orange-400/40'
              }`}
              aria-current={index === currentSlide}
              aria-label={`Slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        {/* Previous button - Responsive sizing and positioning */}
        <button
          type="button"
          className="absolute top-0 left-2 sm:left-4 lg:left-6 z-30 flex items-center justify-center h-full px-2 sm:px-4 lg:px-6 cursor-pointer group focus:outline-none"
          style={{ paddingTop: '15vh', paddingBottom: '15vh' }}
          onClick={goToPrevious}
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-300 drop-shadow-lg" />
          <span className="sr-only">Previous</span>
        </button>

        {/* Next button - Responsive sizing and positioning */}
        <button
          type="button"
          className="absolute top-0 right-2 sm:right-4 lg:right-6 z-30 flex items-center justify-center h-full px-2 sm:px-4 lg:px-6 cursor-pointer group focus:outline-none"
          style={{ paddingTop: '15vh', paddingBottom: '15vh' }}
          onClick={goToNext}
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-300 drop-shadow-lg" />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;