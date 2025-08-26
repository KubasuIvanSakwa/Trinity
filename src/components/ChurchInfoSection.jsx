import React from "react";
import { CircleArrowRight } from 'lucide-react';
import mentors from '../assets/mentor.jpg'
import cross from '../assets/ch_3.jpg'
import one from '../assets/ch_4.jpg'

const churchSections = [
  {
    title: "Our Community",
    image:`${one}`
  },
  {
    title: "Church Mission",
    image:`${cross}` 
  },
  {
    title: "Our Mentors",
    image:`${mentors}`
  },
];

export default function ChurchInfoSection() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">

        {churchSections.map((section, index) => (
          <div key={index} className="text-center group cursor-pointer">
            {/* Image with Zoom Effect */}
            <div className="overflow-hidden shadow-md">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-64 object-cover transform transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>

            {/* Title + Arrow */}
            <div className="flex items-center justify-between">
              <h3 className="mt-4 text-xl text-black/70 font-bold">
                {section.title}
              </h3>
              <CircleArrowRight
                className="mt-4 opacity-0 translate-x-2 transition-all duration-500 ease-out group-hover:opacity-70 group-hover:translate-x-0"
              />
            </div>

            {/* Animated underline */}
            <div
              className="mx-auto mt-2 h-[2px] w-full bg-gray-300 relative overflow-hidden"
            >
              <span
                className="absolute left-0 top-0 h-full w-full bg-black 
                           origin-left scale-x-0 group-hover:scale-x-100 
                           transition-transform duration-500 ease-out"
              ></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
