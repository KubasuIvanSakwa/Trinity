import React from "react";
import bibleImage from "../assets/bible.jpg"; // replace with your image

export default function SermonSection() {
  return (
    <section className="bg-[#f8fbff] py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* LEFT: Image with overlay */}
        <div className="relative w-full flex justify-center">
          <img
            src={bibleImage}
            alt="Bible"
            className="w-full md:w-[90%] h-[20rem] sm:h-[25rem] md:h-[40rem] object-cover"
          />
          <div className="absolute bottom-0 md:bottom-0 right-0 md:right-0 bg-black text-white p-4 sm:p-6 sm:pl-[3rem] w-[14rem] sm:w-[18rem] flex justify-center items-center h-[10rem] sm:h-[15rem]">
            <p className="text-lg sm:text-2xl md:text-4xl font-bold text-center sm:text-left">
              Lifting Our Hearts in Prayer
            </p>
          </div>
        </div>

        {/* RIGHT: Text content */}
        <div className="space-y-4 mt-6 md:mt-[2rem]">
          <p className="text-sm uppercase tracking-widest font-semibold text-gray-600">
            Work of the Church
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Preaching Christ through the Word of God
          </h2>
          <p className="text-gray-600">
            Grounded in the truth of Scripture, our mission is to share the
            Gospel of Jesus Christ and invite all people into a life of faith
            and discipleship.
          </p>
          <p className="text-gray-500 border-l-2 border-gray-300 pl-4">
            Each sermon is rooted in the Bible and seeks to encourage,
            challenge, and equip believers to live out their faith in everyday
            life, glorifying God in all they do.
          </p>
          <button className="bg-[#f2543d] text-white font-semibold px-6 py-3 mt-4 cursor-pointer hover:bg-[#d9442f] transition-colors">
            About Us
          </button>
        </div>
      </div>
    </section>
  );
}
