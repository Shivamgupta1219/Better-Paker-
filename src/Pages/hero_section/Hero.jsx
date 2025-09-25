import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import ImageCarousel from "../../Components/ImageCarousel"; // ✅ Carousel Component

// ✅ Custom Button Component
function CustomButton({ children, className, to }) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition duration-300 ${className}`}
    >
      {children}
    </Link>
  );
}

export default function Hero() {
  return (
    <section className="hero-section relative overflow-hidden p-3 h-[100vh] flex items-center">
      {/* ✅ Background Carousel */}
      <div className="absolute inset-0">
        <ImageCarousel />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/50 to-transparent"></div>
      </div>

      {/* ✅ Foreground Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl text-white">
          {/* Tagline */}
          <div className="mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-primary/30">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Premium Real Estate in Dubai
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Find Your
            <span className="block text-primary">Dream Home</span>
            in Dubai
          </h1>

          {/* Description */}
          <p className="text-xl leading-relaxed mb-8 text-white/90">
            Discover luxury apartments and villas in Dubai's most prestigious
            locations. Your trusted partner for premium real estate investments
            and exceptional living experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <CustomButton
              to="/properties"
              className="bg-white/10 border border-white/30 text-white 
              hover:bg-yellow-400/70 hover:shadow-[0_0_15px_3px_rgba(234,179,8,0.6)] transition-all duration-300"
            >
              View Properties <FaArrowRight className="ml-2 w-5 h-5" />
            </CustomButton>

            <CustomButton
              to="/contact"
              className="border border-white/30 text-white bg-yellow-500 hover:bg-yellow-600 transition-all duration-300"
            >
              Contact Us <FaPlay className="ml-2 w-5 h-5" />
            </CustomButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 pb-10 border-t border-white/20">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">150+</div>
              <div className="text-sm text-white/80">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">
                AED 2.5B+
              </div>
              <div className="text-sm text-white/80">Properties Sold</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">5+</div>
              <div className="text-sm text-white/80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-4"></div>
        </div>
      </div>
    </section>
  );
}
