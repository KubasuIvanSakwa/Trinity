import React from "react";

import Carousel from "../components/Carousel";
import RotatingWords from "../components/RotatingWords";
import ChurchInfoSection from "../components/ChurchInfoSection";
import SermonSection from "../components/SermonSection";
import EventCountdown from "../components/EventCountdown";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const Hero = () => {

  return (
    <div className="min-h-screen bg-white">
      <Carousel />

      {/* Introduction Section */}
      <RotatingWords />


      <ChurchInfoSection />

      <SermonSection />

      <EventCountdown />

      <Testimonial />

      <Footer />

    </div>
  );
};

export default Hero;
