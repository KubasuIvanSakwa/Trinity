import React, { useState, useEffect } from 'react';
import { Calendar, Users, Heart, Play, ChevronRight, Clock, MapPin, User, MessageCircle, Instagram } from 'lucide-react';
import Carousel from '../components/Carousel';
import RotatingWords from '../components/RotatingWords';
import ChurchInfoSection from '../components/ChurchInfoSection';
import SermonSection from '../components/SermonSection';
import EventCountdown from '../components/EventCountdown';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown timer effect
  useEffect(() => {
    const targetDate = new Date('2025-07-19T10:00:00');
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(timer);
  }, []);

  const events = [
    {
      month: 'May 2025',
      items: [
        { date: 'May 15', time: '10:00 AM', title: 'Bible Study', speaker: 'Pastor John Smith', location: 'Grace Community Church' },
        { date: 'May 22', time: '11:00 AM', title: 'Sunday Worship', speaker: 'Rev. Sarah Johnson', location: 'Main Sanctuary' }
      ]
    },
    {
      month: 'June 2025',
      items: [
        { date: 'June 5', time: '7:00 PM', title: 'Choir Repetition', speaker: 'Music Director Mary Brown', location: 'Music Hall' },
        { date: 'June 12', time: '2:00 PM', title: 'Marriage Preparation', speaker: 'Pastor David Wilson', location: 'Fellowship Hall' }
      ]
    },
    {
      month: 'July 2025',
      items: [
        { date: 'July 19', time: '10:00 AM', title: 'Week of Prayer for Christian Unity', speaker: 'Piter Bowman - Lead Pastor', location: 'Main Sanctuary' },
        { date: 'July 26', time: '6:00 PM', title: 'Youth Ministry', speaker: 'Pastor Emily Davis', location: 'Youth Center' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      

      {/* Hero Section */}
      {/* <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 pt-[10rem]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1507692138018-ea015e5c6e41?w=1200&h=600&fit=crop" 
            alt="Church interior" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Our Church is the True Path to Overcoming Suffering & Difficulties in Life through Faith & Hope.
          </h1>
          <p className="text-xl italic mb-12">Piter Bowman – Lead Pastor</p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
              <Users className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">01. Our Community</h3>
              <p className="text-sm mb-4">A loving family where everyone belongs and grows together in faith and fellowship.</p>
              <a href="#" className="text-blue-300 hover:text-white flex items-center justify-center">
                Read more <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
              <Heart className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">02. Church Mission</h3>
              <p className="text-sm mb-4">Spreading God's love and hope to transform lives and communities through Christ.</p>
              <a href="#" className="text-blue-300 hover:text-white flex items-center justify-center">
                Read more <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
              <User className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">03. Our Mentors</h3>
              <p className="text-sm mb-4">Experienced spiritual guides dedicated to helping you grow in your faith journey.</p>
              <a href="#" className="text-blue-300 hover:text-white flex items-center justify-center">
                Read more <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section> */}
      <Carousel />

      {/* Introduction Section */}
      <RotatingWords />

      <ChurchInfoSection />

      <SermonSection />

      <EventCountdown />

      <Testimonial />

      <Footer />

      {/* Footer
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">Grace Church</div>
              <p className="text-gray-400">
                A community of faith, hope, and love serving God and our neighbors.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Events</a></li>
                <li><a href="#" className="hover:text-white">Ministries</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>123 Church Street</p>
                <p>Ruiru, Kiambu County</p>
                <p>+254 700 000 000</p>
                <p>info@gracechurch.org</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Service Times</h3>
              <div className="space-y-2 text-gray-400">
                <p>Sunday Worship: 10:00 AM</p>
                <p>Bible Study: Wednesday 7:00 PM</p>
                <p>Prayer Meeting: Friday 6:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 AncoraThemes. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default Hero;