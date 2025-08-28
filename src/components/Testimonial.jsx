import React from "react";
import prayerImage from "../assets/pray1.png";

export default function Testimonial() {
  return (
    <section className="bg-black text-white">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 px-6 items-center">
        {/* Left Image - hidden on mobile */}
        <div className="hidden md:flex md:w-1/2 justify-center">
          <div className="relative w-full max-w-lg">
            <img
              src={prayerImage}
              alt="Person in prayer with rosary"
              className="object-cover h-[28rem] w-full"
              style={{
                WebkitMask: `
                  radial-gradient(ellipse 60% 40% at 50% 45%, black 5%, rgba(0,0,0,0.8) 25%, rgba(0,0,0,0.4) 40%, transparent 65%),
                  radial-gradient(ellipse 45% 70% at 35% 50%, black 8%, rgba(0,0,0,0.6) 30%, transparent 55%),
                  radial-gradient(ellipse 65% 55% at 65% 60%, black 3%, rgba(0,0,0,0.5) 20%, transparent 45%),
                  radial-gradient(ellipse 70% 35% at 40% 30%, black 10%, rgba(0,0,0,0.3) 35%, transparent 60%)
                `,
                WebkitMaskComposite: "add",
                mask: `
                  radial-gradient(ellipse 60% 40% at 50% 45%, black 5%, rgba(0,0,0,0.8) 25%, rgba(0,0,0,0.4) 40%, transparent 65%),
                  radial-gradient(ellipse 45% 70% at 35% 50%, black 8%, rgba(0,0,0,0.6) 30%, transparent 55%),
                  radial-gradient(ellipse 65% 55% at 65% 60%, black 3%, rgba(0,0,0,0.5) 20%, transparent 45%),
                  radial-gradient(ellipse 70% 35% at 40% 30%, black 10%, rgba(0,0,0,0.3) 35%, transparent 60%)
                `,
                maskComposite: "add",
              }}
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center py-8">
  <p className="uppercase text-sm text-gray-400 tracking-widest mb-2">
    Testimonials
  </p>
  <h2 className="text-3xl font-bold mb-4">Our Church Family Speaks</h2>
  <p className="text-gray-300 mb-6 leading-relaxed">
    "Being part of Trinity Chapel Ruiru has been such a blessing. The
    fellowship, powerful teaching of God’s Word, and the genuine sense of
    family have helped me grow deeper in faith. Every service leaves me
    encouraged, challenged, and inspired to live for Christ. If you’re
    looking for a place to belong and grow, this is home."
  </p>

  {/* Profile */}
  <div className="flex items-center gap-3">
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-700 to-indigo-900 flex items-center justify-center">
      <span className="text-white font-semibold text-lg">S</span>
    </div>
    <div>
      <h4 className="font-semibold">Sarah K.</h4>
      <p className="text-gray-400 text-sm">Member since 2021</p>
    </div>
  </div>
</div>

      </div>
    </section>
  );
}
