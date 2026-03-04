// import { assets } from "../assets/assets";
// import { useAppContext } from "../context/appContext";
// import { motion } from "framer-motion";

// const ProductCard = ({ product }) => {
//   const { navigate } = useAppContext();

//   // Vibrant gradients based on category or just a general "Eco" palette
//   const cardGradients = {
//     Living: "from-emerald-400/20 via-teal-500/10 to-white",
//     Bedroom: "from-indigo-400/20 via-purple-500/10 to-white",
//     Kitchen: "from-orange-400/20 via-yellow-500/10 to-white",
//     Default: "from-blue-400/20 via-indigo-500/10 to-white"
//   };

//   const currentGradient = cardGradients[product.category] || cardGradients.Default;

//   return (
//     product && (
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true }}
//         whileHover={{ 
//           y: -10,
//           transition: { duration: 0.2 }
//         }}
//         onClick={() => {
//           navigate(`/product/${product.category.toLowerCase()}/${product?._id}`);
//           window.scrollTo(0, 0);
//         }}
//         // The "Colorful" Background using a Gradient
//         className={`group cursor-pointer relative overflow-hidden rounded-3xl border border-white/50 shadow-lg bg-gradient-to-br ${currentGradient} transition-all duration-500 hover:shadow-2xl w-full`}
//       >
//         {/* Animated Glow Effect on Hover */}
//         <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>

//         <div className="relative bg-white/40 backdrop-blur-md m-1 rounded-[22px] overflow-hidden">
//           {/* Image Section */}
//           <div className="relative aspect-square flex items-center justify-center p-6">
//             <motion.img
//               whileHover={{ scale: 1.15, rotate: 2 }}
//               transition={{ type: "spring", stiffness: 300 }}
//               className="drop-shadow-2xl object-contain w-full h-full"
//               src={`http://localhost:5000/images/${product.image[0]}`}
//               alt={product.name}
//             />
            
//             {/* "Details" Badge - Colorful & Eye-catching */}
//             <div className="absolute top-3 right-3">
//                <span className="bg-indigo-600 text-white text-[10px] px-3 py-1 rounded-full font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
//                  VIEW DETAILS
//                </span>
//             </div>
//           </div>

//           {/* Details Section */}
//           <div className="p-4 text-center bg-white/60 backdrop-blur-sm">
//             <span className="text-indigo-600 text-[10px] font-black uppercase tracking-widest bg-indigo-100 px-2 py-0.5 rounded-md">
//               {product.category}
//             </span>
            
//             <h3 className="text-gray-900 font-bold text-base mt-2 truncate leading-tight">
//               {product.name}
//             </h3>

//             {/* Price section with color accents */}
//             <div className="flex flex-col items-center mt-3 space-y-0.5">
//               <p className="text-xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//                 RM {product.offerPrice}
//               </p>
//               <p className="text-xs text-gray-400 line-through font-medium">
//                 RM {product.price}
//               </p>
//             </div>

//             {/* Bottom Decorative Button Line */}
//             <div className="mt-4 flex items-center justify-center">
//               <div className="h-1 w-0 group-hover:w-12 bg-indigo-500 rounded-full transition-all duration-500"></div>
//               <p className="text-[11px] font-bold text-indigo-600 mx-0 group-hover:mx-2 opacity-0 group-hover:opacity-100 transition-all uppercase">
//                 Explore
//               </p>
//               <div className="h-1 w-0 group-hover:w-12 bg-indigo-500 rounded-full transition-all duration-500"></div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     )
//   );
// };

// export default ProductCard;



import { assets } from "../assets/assets";
import { useAppContext } from "../context/appContext";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const { navigate } = useAppContext();

  // Vibrant gradients based on category or just a general "Eco" palette
  const cardGradients = {
    Living: "from-emerald-400/20 via-teal-500/10 to-white",
    Bedroom: "from-indigo-400/20 via-purple-500/10 to-white",
    Kitchen: "from-orange-400/20 via-yellow-500/10 to-white",
    Default: "from-blue-400/20 via-indigo-500/10 to-white"
  };

  const currentGradient = cardGradients[product.category] || cardGradients.Default;

  const handleDetailsClick = (e) => {
    e.stopPropagation(); // Prevent card click if button is inside
    navigate(`/product/${product._id}`);
    window.scrollTo(0, 0);
  };

  return (
    product && (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        onClick={handleDetailsClick} // Card itself also navigates
        className="group cursor-pointer relative overflow-hidden rounded-3xl border border-white/50 shadow-lg bg-gradient-to-br ${currentGradient} transition-all duration-500 hover:shadow-2xl w-full"
      >
        {/* Animated Glow Effect on Hover */}
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>

        <div className="relative bg-white/40 backdrop-blur-md m-1 rounded-[22px] overflow-hidden">
          {/* Image Section */}
          <div className="relative aspect-square flex items-center justify-center p-6">
            <motion.img
              whileHover={{ scale: 1.15, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="drop-shadow-2xl object-contain w-full h-full"
              src={`http://localhost:5000/images/${product.image[0]}`}
              alt={product.name}
            />
            
            {/* Category Badge */}
            <span className="absolute top-3 left-3 bg-indigo-600 text-white text-[10px] px-3 py-1 rounded-full font-bold shadow-lg">
              {product.category}
            </span>

            {/* Explicit Details Button (appears on hover) */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              onClick={handleDetailsClick}
              className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg hover:bg-indigo-700 transition-colors whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 group-hover:translate-y-0"
            >
              View Details
            </motion.button>
          </div>

          {/* Details Section */}
          <div className="p-4 text-center bg-white/60 backdrop-blur-sm">
            <h3 className="text-gray-900 font-bold text-base mt-2 truncate leading-tight">
              {product.name}
            </h3>

            {/* Price section with color accents */}
            <div className="flex flex-col items-center mt-3 space-y-0.5">
              <p className="text-xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                RM {product.offerPrice}
              </p>
              <p className="text-xs text-gray-400 line-through font-medium">
                RM {product.price}
              </p>
            </div>

            {/* Bottom Decorative Line */}
            <div className="mt-4 flex items-center justify-center">
              <div className="h-1 w-0 group-hover:w-12 bg-indigo-500 rounded-full transition-all duration-500"></div>
              <p className="text-[11px] font-bold text-indigo-600 mx-0 group-hover:mx-2 opacity-0 group-hover:opacity-100 transition-all uppercase">
                Explore
              </p>
              <div className="h-1 w-0 group-hover:w-12 bg-indigo-500 rounded-full transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  );
};

export default ProductCard;