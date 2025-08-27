import React from "react";
import prayerImage from '../assets/pray.svg';

export default function Testimonial() {
  return (
    <section className="bg-black text-white">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 px-6 items-center">
        
        {/* Left Image - hidden on mobile */}
        <div className="hidden md:flex md:w-1/2 justify-center">
          <div className="relative w-full max-w-md">
            <img
              src={prayerImage}
              alt="Person in prayer with rosary"
              className="rounded-lg object-cover h-96 w-full shadow-2xl"
            />
            {/* Multiple gradient overlays for smooth fade effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg"></div>
            {/* Radial fade from edges */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 rounded-lg"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 rounded-lg"></div>
            {/* Subtle vignette effect */}
            <div className="absolute inset-0 rounded-lg" style={{
              background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.4) 100%)'
            }}></div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center py-8">
          <p className="uppercase text-sm text-gray-400 tracking-widest mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold mb-4">Our Catholic Family Speaks</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            "My family and I attend Holy Mass here every Sunday, and it has transformed our spiritual journey. The reverent celebration of the Eucharist, the beautiful homilies, and the strong sense of Catholic community have deepened our faith immeasurably. Father's guidance through the sacraments and the parish's commitment to Catholic social teaching inspire us daily. I encourage all Catholic families to join our parish family."
          </p>

          {/* Profile */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-800 to-amber-900 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">M</span>
            </div>
            <div>
              <h4 className="font-semibold">Maria Santos</h4>
              <p className="text-gray-400 text-sm">Parishioner since 2018</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}