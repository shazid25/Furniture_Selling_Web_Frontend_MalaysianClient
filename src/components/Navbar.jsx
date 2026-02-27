import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { navigate, searchQuery, setSearchQuery } = useAppContext();

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/products");
    }
  }, [searchQuery, navigate]);

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-3 border-b border-gray-300 bg-white sticky top-0 z-50">
      
      {/* 1. Logo & Name - Visible on all screens */}
      <Link to="/" className="flex items-center gap-2 flex-shrink-0">
        <img 
          src={assets.logo} 
          alt="Logo" 
          className="w-auto h-8 md:h-10 object-contain" 
        />
        <h2 className="text-lg md:text-xl font-bold text-green-600 whitespace-nowrap">
          Eco Home Solutions
        </h2>
      </Link>

      {/* 2. Centered Search Bar (Desktop) */}
      <div className="hidden md:flex flex-1 justify-center max-w-md mx-8">
        <div className="flex items-center text-sm gap-2 border border-gray-300 px-4 py-1.5 rounded-full w-full focus-within:border-indigo-500 transition-all bg-gray-50">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products..."
          />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path clipRule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* 3. Navigation Links (Desktop) */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8 font-medium text-gray-700 flex-shrink-0">
        <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
        <Link to="/products" className="hover:text-indigo-600 transition">All Products</Link>
        <Link to="/contact" className="hover:text-indigo-600 transition">Contact</Link>
      </div>

      {/* 4. Mobile Menu Toggle */}
      <button 
        onClick={() => setOpen(!open)} 
        className="md:hidden p-2 text-gray-600 focus:outline-none ml-4"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
        </svg>
      </button>

      {/* 5. Mobile Menu Overlay */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 flex flex-col p-6 gap-4 md:hidden shadow-xl">
          <div className="flex items-center text-sm gap-2 border border-gray-300 px-4 py-2 rounded-full bg-gray-50">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent outline-none"
              type="text"
              placeholder="Search products..."
            />
          </div>
          <Link onClick={() => setOpen(false)} to="/" className="text-lg font-medium py-2 border-b border-gray-100">Home</Link>
          <Link onClick={() => setOpen(false)} to="/products" className="text-lg font-medium py-2 border-b border-gray-100">All Products</Link>
          <Link onClick={() => setOpen(false)} to="/contact" className="text-lg font-medium py-2">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;