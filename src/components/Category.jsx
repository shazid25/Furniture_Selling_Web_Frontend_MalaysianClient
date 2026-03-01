// import { categories } from "../assets/assets";
// import { useAppContext } from "../context/appContext";
// import { motion } from "framer-motion";

// const Category = () => {
//   const { navigate } = useAppContext();

//   // Animation Variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1 },
//   };

//   return (
//     <div className="mt-16 px-4 md:px-16 lg:px-24 xl:px-32">
//       <motion.p
//         initial={{ opacity: 0, x: -20 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         className="text-2xl md:text-3xl font-bold text-gray-900 mb-8"
//       >
//         Shop by Category
//       </motion.p>

//       {/* Main Grid Logic: 
//           - 'grid-cols-6' ensures all 6 items stay in one row even on the smallest mobile screen.
//           - 'gap-2' for mobile to prevent overflow, 'md:gap-6' for desktop spacing.
//       */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="grid grid-cols-6 gap-2 md:gap-6 items-center justify-center"
//       >
//         {categories.map((category, index) => (
//           <motion.div
//             key={index}
//             variants={itemVariants}
//             whileHover={{ y: -5 }}
//             className="group cursor-pointer p-2 md:p-4 rounded-xl flex flex-col items-center justify-between transition-all duration-300 hover:shadow-lg h-full"
//             style={{ backgroundColor: category.bgColor }}
//             onClick={() => {
//               navigate(`/products/${category.path.toLowerCase()}`);
//               window.scrollTo(0, 0);
//             }}
//           >
//             {/* Image Container */}
//             <div className="w-full aspect-square overflow-hidden rounded-lg bg-white/40 mb-2 md:mb-4 flex items-center justify-center">
//               <img
//                 src={category.image}
//                 alt={category.text}
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//             </div>

//             {/* Category Text: Responsive font size to ensure it fits on mobile */}
//             <p className="text-[10px] sm:text-xs md:text-base font-bold text-gray-800 text-center whitespace-nowrap">
//               {category.text}
//             </p>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default Category;





import { categories } from "../assets/assets";
import { useAppContext } from "../context/appContext"; // Ensure path is correct
import { motion } from "framer-motion";

const Category = () => {
  // Use global search states from Context
  const { navigate, searchQuery, setSearchQuery } = useAppContext();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // The Navbar's useEffect will already handle the navigation, 
      // but we add it here as a backup for instant response.
      navigate("/products");
      window.scrollTo(0, 0);
    }
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="mt-16 px-4 md:px-16 lg:px-24 xl:px-32">
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-gray-900 mb-8"
      >
        Shop by Category
      </motion.p>

      {/* Category Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-6 gap-2 md:gap-6 items-center justify-center"
      >
        {categories.map((category, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="group cursor-pointer p-2 md:p-4 rounded-xl flex flex-col items-center justify-between transition-all duration-300 hover:shadow-lg h-full"
            style={{ backgroundColor: category.bgColor }}
            onClick={() => {
              navigate(`/products/${category.path.toLowerCase()}`);
              window.scrollTo(0, 0);
            }}
          >
            <div className="w-full aspect-square overflow-hidden rounded-lg bg-white/40 mb-2 md:mb-4 flex items-center justify-center">
              <img
                src={category.image}
                alt={category.text}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <p className="text-[10px] sm:text-xs md:text-base font-bold text-gray-800 text-center whitespace-nowrap">
              {category.text}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* --- SYNCED SEARCH BAR SECTION --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-12 md:mt-16 flex flex-col items-center"
      >
        <form 
          onSubmit={handleSearch}
          className="relative w-full max-w-2xl group"
        >
          <input 
            type="text"
            placeholder="Search for eco-friendly furniture..."
            // Linked to global search state
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-4 pl-6 pr-16 bg-white border border-gray-200 rounded-full shadow-sm outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 text-gray-700 font-medium"
          />
          
          <button 
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-500 hover:bg-indigo-600 p-3 rounded-full transition-colors duration-300 shadow-lg shadow-indigo-200"
          >
            <svg 
              className="w-5 h-5 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>
        
        <p className="mt-4 text-xs text-gray-400 font-medium tracking-wide uppercase">
          Find your perfect sustainable home decor
        </p>
      </motion.div>
    </div>
  );
};

export default Category;