import React, { useEffect, useState, useMemo } from "react";
import one from '../assets/ch_3.jpg'

export default function EventCountdown() {
  // Set target date to upcoming Saturday
  const targetDate = useMemo(() => {
    const now = new Date();
    const dayOfWeek = now.getDay(); // Sunday=0, Saturday=6
    const daysUntilSaturday = (6 - dayOfWeek + 7) % 7 || 7;
    const saturday = new Date(now);
    saturday.setDate(now.getDate() + daysUntilSaturday);
    saturday.setHours(0, 0, 0, 0);
    return saturday.getTime();
  }, []);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section
        className="relative flex flex-col items-center justify-center text-center text-white py-20 px-6 bg-cover bg-center after:content-[''] after:absolute after:inset-0 after:bg-red-500 after:opacity-50"
        style={{ backgroundImage: `url('${one}')` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 max-w-3xl">
        <p className="uppercase text-sm tracking-widest mb-3">Upcoming Event</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-8">
          Join Our Week of Prayer for Christian Unity Coming on 30th August 2025
        </h2>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="text-xs sm:text-sm mt-1 uppercase">{item.label}</span>
            </div>
          ))}
        </div>

        <button className="bg-[#323A3B] hover:bg-[#101314] text-white px-6 py-3 font-semibold transition cursor-pointer">
          View All Events
        </button>
      </div>
    </section>
  );
}
