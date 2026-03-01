import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="text-gray-600 bg-gray-50/50 pt-16 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-wrap justify-between gap-12 md:gap-6">
        
        {/* Brand Section */}
        <div className="max-w-80">
          <div className="flex items-center gap-2 mb-4">
            <img src={assets.logo} alt="Logo" className="w-8 h-8 object-contain" />
            <h1 className="text-2xl font-black bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Eco Home Soluations
            </h1>
          </div>
          <p className="text-sm leading-relaxed">
            Elevating Malaysian homes with sustainable, high-quality furniture. 
            We believe in beauty that doesn't cost the earth.
          </p>
          
          {/* Social Icons with Brand Colors */}
          <div className="flex items-center gap-4 mt-6">
            <a href="#" className="hover:text-pink-600 transition-colors"><i className="fa-brands fa-instagram text-xl"></i></a>
            <a href="#" className="hover:text-blue-700 transition-colors"><i className="fa-brands fa-facebook text-xl"></i></a>
            <a href="#" className="hover:text-sky-500 transition-colors"><i className="fa-brands fa-x-twitter text-xl"></i></a>
            <a href="#" className="hover:text-blue-600 transition-colors"><i className="fa-brands fa-linkedin text-xl"></i></a>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <p className="text-sm font-bold text-gray-900 tracking-widest uppercase mb-5">Navigation</p>
          <ul className="flex flex-col gap-3 text-sm font-medium">
            <li><a href="/" className="hover:text-indigo-600 transition">Home</a></li>
            <li><a href="/products" className="hover:text-indigo-600 transition">Catalog</a></li>
            <li><a href="/about" className="hover:text-indigo-600 transition">Our Story</a></li>
            <li><a href="/contact" className="hover:text-indigo-600 transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Categories Section */}
        <div>
          <p className="text-sm font-bold text-gray-900 tracking-widest uppercase mb-5">Collections</p>
          <ul className="flex flex-col gap-3 text-sm font-medium">
            <li><a href="#" className="hover:text-indigo-600 transition">Living Room</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition">Bedroom</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition">Kitchen & Dining</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition">Sustainable Decor</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="max-w-80 w-full">
          <p className="text-sm font-bold text-gray-900 tracking-widest uppercase mb-5">Join the Movement</p>
          <p className="text-sm mb-4">Subscribe for eco-tips and exclusive preview of new collections.</p>
          <div className="relative group">
            <input
              type="email"
              className="w-full bg-white rounded-full border border-gray-200 py-3 px-5 pr-12 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all text-sm shadow-sm"
              placeholder="Enter your email"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 text-white p-2.5 rounded-full transition-all shadow-md active:scale-95">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 border-t border-gray-200/60 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium tracking-wide">
        <p>© {new Date().getFullYear()} Eco Home Solutions. Designed for Sustainability.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-indigo-600 transition">Privacy Policy</a>
          <a href="#" className="hover:text-indigo-600 transition">Terms of Service</a>
          <a href="#" className="hover:text-indigo-600 transition">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;