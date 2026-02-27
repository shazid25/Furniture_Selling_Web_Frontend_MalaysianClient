import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Banner = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const fadeUp = "opacity-0 translate-y-8 transition-all duration-1000 ease-out";
  const startFadeUp = "opacity-100 translate-y-0";

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-[#F9F8F6]">
      
      {/* Background Image - Object cover ensures it fills the height */}
      <img
        src={assets.main_banner_bg}
        alt="Modern Living Room"
        className="absolute inset-0 w-full h-full object-cover object-right md:object-center"
      />

      {/* Mobile-only Overlay: Ensures text is visible regardless of image brightness */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent md:from-transparent" />

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 xl:px-32">
        
        {/* Main Heading */}
        <h1 
          className={`${fadeUp} ${animate ? startFadeUp : ""} delay-100 text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 max-w-sm md:max-w-xl leading-[1.1]`}
        >
          Crafting <span className="">Comfort</span> <br /> 
          with Conscience.
        </h1>

        {/* Subtext - Improved visibility with font weight and color */}
        <p 
          className={`${fadeUp} ${animate ? startFadeUp : ""} delay-300 mt-6 text-lg md:text-xl text-slate-700 font-medium max-w-[280px] md:max-w-md leading-relaxed`}
        >
          Elevate your space with timeless furniture made from sustainably sourced materials.
        </p>

        {/* Action Buttons */}
        <div className={`${fadeUp} ${animate ? startFadeUp : ""} delay-500 flex flex-wrap items-center mt-8 gap-4`}>
          <Link
            to="/products"
            className="group flex items-center gap-3 px-8 py-3.5 bg-indigo-600 text-white rounded-full font-semibold shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-300"
          >
            Shop Collection
            <img
              src={assets.white_arrow_icon}
              alt=""
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            />
          </Link>

          <Link
            to="/products"
            className="hidden sm:block px-8 py-3.5 bg-white/80 backdrop-blur-sm text-slate-900 border border-slate-200 rounded-full font-semibold hover:bg-white transition-all shadow-sm"
          >
            View Gallery
          </Link>
        </div>
      </div>

      {/* Bottom subtle fade for smooth transition to next section */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default Banner;