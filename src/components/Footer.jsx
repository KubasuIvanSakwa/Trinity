import React from "react";
import { Facebook, Twitter, Instagram, Dribbble } from "lucide-react";
import logo from "../assets/logo-white.webp";

import ch_1 from "../assets/ch_1.jpg";
import ch_2 from "../assets/ch_2.jpg";
import ch_3 from "../assets/ch_3.jpg";
import ch_4 from "../assets/ch_4.jpg";
import ch_31 from "../assets/ch_3.avif";

export default function Footer() {
  return (
    <footer className="bg-[#060d18] text-gray-300">
      {/* Instagram Section */}
      <div className="px-6 py-8">
        <h3 className="text-center text-sm text-gray-400 mb-6 flex justify-center items-center">
          <Instagram size={18} />
          <span className="inline-block px-3 py-1">instagram</span>
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 max-w-3xl mx-auto">
          {[...Array(6)].map((_, idx) => (
            <img
              key={idx}
              src={ch_3}
              alt={`Instagram ${idx + 1}`}
              className="w-full aspect-square object-cover "
            />
          ))}
        </div>
      </div>

      {/* Middle Section */}
      <div className="py-10 text-center">
        {/* Logo */}
        <div className="flex justify-center items-center p-[0.5rem]">
          <img src={logo} alt="Logo" />
        </div>

        {/* Links */}
        <nav className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-white transition">
            New
          </a>
          <a href="#" className="hover:text-white transition">
            Donation
          </a>
          <a href="#" className="hover:text-white transition">
            Contacts
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center space-x-3 mb-6">
          <a
            href="#"
            className="p-1.5 bg-gray-800 rounded-full hover:bg-white hover:text-black transition"
          >
            <Facebook size={14} />
          </a>
          <a
            href="#"
            className="p-1.5 bg-gray-800 rounded-full hover:bg-white hover:text-black transition"
          >
            <Twitter size={14} />
          </a>
          <a
            href="#"
            className="p-1.5 bg-gray-800 rounded-full hover:bg-white hover:text-black transition"
          >
            <Dribbble size={14} />
          </a>
          <a
            href="#"
            className="p-1.5 bg-gray-800 rounded-full hover:bg-white hover:text-black transition"
          >
            <Instagram size={14} />
          </a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="flex justify-center items-center">
        <div className="border-t border-[#3b3834] w-[60%]" />
      </div>
      <div className="py-4 text-center text-sm text-gray-500">
        Yunovia Group © {new Date().getFullYear()}. All Rights Reserved.
      </div>
    </footer>
  );
}
