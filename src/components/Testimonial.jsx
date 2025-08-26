import React from "react";
import personImage from "../assets/pray.svg"; // replace with your image path
import profileImage from "../assets/pray.svg"; // replace with profile picture path

export default function Testimonial() {
  return (
    <section className="bg-black text-white">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 px-6 items-center">
        
        {/* Left Image - hidden on mobile */}
        <div className="hidden md:flex md:w-1/2 justify-center">
          <img
            src={personImage}
            alt="Praying person"
            className="rounded-lg object-contain h-auto w-auto max-w-full"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center py-8">
          <p className="uppercase text-sm text-gray-400 tracking-widest mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold mb-4">Parishioners About Us</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            My wife and I come here every Sunday. The church’s atmosphere is
            nice, inspirational and devout. Many good and kind people pray here.
            I recommend joining us with all your family.
          </p>

          {/* Profile */}
          <div className="flex items-center gap-3">
            <img
              src={profileImage}
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold">Alex Moore</h4>
              <p className="text-gray-400 text-sm">London</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
