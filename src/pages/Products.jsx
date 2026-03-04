// import { useState, useEffect } from "react";
// import ProductCard from "../components/ProductCard";
// import { useAppContext } from "../context/appContext";
// import { motion } from "framer-motion";

// const Products = () => {
//   const { products, searchQuery } = useAppContext();
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [visibleCount, setVisibleCount] = useState(6);
//   const [loading, setLoading] = useState(false);

//   // Filter products based on search query
//   useEffect(() => {
//     if (searchQuery.length > 0) {
//       setFilteredProducts(
//         products.filter((product) =>
//           product.name.toLowerCase().includes(searchQuery.toLowerCase())
//         )
//       );
//     } else {
//       setFilteredProducts(products);
//     }
//     // Reset visible count when search changes
//     setVisibleCount(6);
//   }, [products, searchQuery]);

//   const visibleProducts = filteredProducts
//     .filter((product) => product.inStock)
//     .slice(0, visibleCount);
//   const hasMore = visibleCount < filteredProducts.filter(p => p.inStock).length;

//   const loadMore = () => {
//     setLoading(true);
//     // Simulate network delay for smooth UX
//     setTimeout(() => {
//       setVisibleCount(prev => prev + 6);
//       setLoading(false);
//     }, 500);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 md:px-8 lg:px-16 mt-16">
//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-center mb-12"
//       >
//         <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-3">
//           All Products
//         </h1>
//         <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full" />
//         <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
//           Discover thoughtfully crafted pieces that blend comfort with conscience.
//         </p>
//       </motion.div>

//       {/* Product Grid */}
//       {visibleProducts.length === 0 ? (
//         <div className="text-center py-20 text-gray-400">No products found</div>
//       ) : (
//         <>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
//             {visibleProducts.map((product, index) => (
//               <motion.div
//                 key={product._id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.05 }}
//               >
//                 <ProductCard product={product} />
//               </motion.div>
//             ))}
//           </div>

//           {/* See More Button */}
//           {hasMore && (
//             <div className="flex justify-center mt-16">
//               <button
//                 onClick={loadMore}
//                 disabled={loading}
//                 className="group relative px-8 py-4 bg-white text-indigo-600 font-medium rounded-full border-2 border-indigo-200 hover:border-indigo-500 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
//               >
//                 <span className="relative z-10 flex items-center gap-2">
//                   {loading ? (
//                     <>
//                       <svg className="animate-spin h-5 w-5 text-indigo-600" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
//                       </svg>
//                       Loading...
//                     </>
//                   ) : (
//                     <>
//                       <span>See More</span>
//                       <svg
//                         width="20"
//                         height="20"
//                         viewBox="0 0 20 20"
//                         fill="none"
//                         className="transform group-hover:translate-y-1 transition-transform"
//                       >
//                         <path
//                           d="M10 4V16M10 16L6 12M10 16L14 12"
//                           stroke="currentColor"
//                           strokeWidth="1.5"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </>
//                   )}
//                 </span>
//                 <span className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-indigo-100 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
//               </button>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default Products;



import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useAppContext } from "../context/appContext";
import { motion, AnimatePresence } from "framer-motion";

const Products = () => {
  const { products, searchQuery } = useAppContext();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(false);

  // Filter products based on search query and stock
  useEffect(() => {
    let filtered = products;
    if (searchQuery.length > 0) {
      filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    // Only show in-stock products
    filtered = filtered.filter((product) => product.inStock);
    setFilteredProducts(filtered);
    // Reset visible count when search changes
    setVisibleCount(6);
  }, [products, searchQuery]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const loadMore = () => {
    setLoading(true);
    // Simulate loading for smooth UX
    setTimeout(() => {
      setVisibleCount((prev) => prev + 6);
      setLoading(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 md:px-8 lg:px-16 mt-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-3">
          All Products
        </h1>
        <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full" />
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Discover thoughtfully crafted pieces that blend comfort with conscience.
        </p>
      </motion.div>

      {/* Product Grid */}
      {visibleProducts.length === 0 ? (
        <div className="text-center py-20 text-gray-400">No products found</div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {visibleProducts.map((product, index) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          {/* See More Button */}
          {hasMore && (
            <div className="flex justify-center mt-16">
              <motion.button
                onClick={loadMore}
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3 text-lg">
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Loading...</span>
                    </>
                  ) : (
                    <>
                      <span>See More</span>
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="transform group-hover:translate-y-1 transition-transform"
                      >
                        <path d="M12 5v14M5 12l7 7 7-7" />
                      </svg>
                    </>
                  )}
                </span>
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Products;