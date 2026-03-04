// import { useEffect, useState } from "react";
// import { useAppContext } from "../context/appContext";
// import { Link, useParams } from "react-router-dom";
// import { motion } from "framer-motion";
// import ProductCard from "../components/ProductCard";

// const SingleProduct = () => {
//   const { products, navigate } = useAppContext();
//   const { id } = useParams();
//   const [thumbnail, setThumbnail] = useState(null);
//   const [relatedProducts, setRelatedProducts] = useState([]);
  
//   const product = products.find((product) => product._id === id);

//   useEffect(() => {
//     if (products.length > 0 && product) {
//       const filtered = products.filter(
//         (item) => item.category === product.category && item._id !== product._id
//       );
//       setRelatedProducts(filtered.slice(0, 4));
//     }
//   }, [products, product]);

//   useEffect(() => {
//     setThumbnail(product?.image[0] || null);
//   }, [product]);

//   if (!product) return null;

//   return (
//     <div className="mt-16 px-4 md:px-10 lg:px-20 mb-20">
//       {/* Breadcrumbs */}
//       <nav className="flex gap-2 text-sm text-gray-500 mb-8">
//         <Link to="/" className="hover:text-indigo-500">Home</Link> /
//         <Link to="/products" className="hover:text-indigo-500">Products</Link> /
//         <span className="text-indigo-500 font-medium">{product.name}</span>
//       </nav>

//       <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
//         {/* Left: Image Gallery */}
//         <div className="flex flex-col-reverse md:flex-row gap-4 flex-1">
//           <div className="flex md:flex-col gap-3 overflow-x-auto">
//             {product.image.map((img, index) => (
//               <img
//                 key={index}
//                 src={`http://localhost:5000/images/${img}`}
//                 onClick={() => setThumbnail(img)}
//                 className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 transition-all ${thumbnail === img ? 'border-indigo-500 scale-105' : 'border-transparent opacity-70'}`}
//                 alt="thumbnail"
//               />
//             ))}
//           </div>
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="flex-1 bg-[#F9FAFB] rounded-3xl overflow-hidden border border-gray-100"
//           >
//             <img src={`http://localhost:5000/images/${thumbnail}`} className="w-full h-full object-cover" alt={product.name} />
//           </motion.div>
//         </div>

//         {/* Right: product Details */}
//         <div className="flex-1 space-y-6">
//           <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
//             <span className="bg-indigo-50 text-indigo-600 px-4 py-1 rounded-full text-xs font-bold uppercase">
//               {product.category}
//             </span>
//             <h1 className="text-4xl font-bold text-gray-900 mt-4">{product.name}</h1>
            
//             <div className="flex items-baseline gap-4 mt-6">
//               <p className="text-3xl font-bold text-indigo-600">RM{product.offerPrice}</p>
//               <p className="text-xl text-gray-400 line-through">RM{product.price}</p>
//             </div>
//           </motion.div>

//           <div className="pt-6 border-t border-gray-100">
//             <p className="text-lg font-semibold mb-3">Description</p>
//             <ul className="space-y-2">
//               {product.description.map((desc, i) => (
//                 <li key={i} className="text-gray-600 flex items-start gap-2">
//                   <span className="text-indigo-500 mt-1.5">•</span> {desc}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Simple Inquiry Button instead of Buy Now */}
//           {/* <button className="w-full md:w-max px-12 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-indigo-600 transition-colors duration-300 shadow-xl shadow-gray-200">
//             Enquire About This Product
//           </button> */}
//         </div>
//       </div>

//       {/* Related products Section */}
//       <div className="mt-32">
//         <div className="flex flex-col items-center mb-12 text-center">
//           <h2 className="text-3xl font-bold text-gray-900">You May Also Like</h2>
//           <div className="w-16 h-1 bg-indigo-500 rounded-full mt-3"></div>
//         </div>

//         {/* Grid: 2 columns on mobile (grid-cols-2), 4 on desktop */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
//           {relatedProducts.map((item, index) => (
//             <ProductCard key={index} product={item} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleProduct;






import { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";

const SingleProduct = () => {
  const { products, navigate } = useAppContext();
  const { id } = useParams();
  const [thumbnail, setThumbnail] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  
  const product = products.find((product) => product._id === id);

  useEffect(() => {
    if (products.length > 0 && product) {
      const filtered = products.filter(
        (item) => item.category === product.category && item._id !== product._id
      );
      setRelatedProducts(filtered.slice(0, 4));
    }
  }, [products, product]);

  useEffect(() => {
    setThumbnail(product?.image[0] || null);
  }, [product]);

  if (!product) return null;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 animate-gradientShift" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl animate-float animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl animate-pulseSlow" />
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-indigo-300/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `floatParticle ${8 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `scale(${0.5 + Math.random()})`,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mt-16 px-4 md:px-10 lg:px-20 mb-20"
      >
        {/* Breadcrumbs */}
        <motion.nav variants={itemVariants} className="flex gap-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link> /
          <Link to="/products" className="hover:text-indigo-600 transition-colors">Products</Link> /
          <span className="text-indigo-600 font-medium">{product.name}</span>
        </motion.nav>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          {/* Left: Image Gallery */}
          <motion.div variants={itemVariants} className="flex flex-col-reverse md:flex-row gap-4 flex-1">
            <div className="flex md:flex-col gap-3 overflow-x-auto">
              {product.image.map((img, index) => (
                <motion.img
                  key={index}
                  whileHover={{ scale: 1.1, borderColor: "#4f46e5" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  src={`http://localhost:5000/images/${img}`}
                  onClick={() => setThumbnail(img)}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 transition-all ${
                    thumbnail === img ? 'border-indigo-500 scale-105' : 'border-transparent opacity-70'
                  }`}
                  alt="thumbnail"
                />
              ))}
            </div>
            <motion.div 
              variants={imageVariants}
              className="flex-1 bg-white/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/30 shadow-xl"
            >
              <img 
                src={`http://localhost:5000/images/${thumbnail}`} 
                className="w-full h-full object-cover" 
                alt={product.name} 
              />
            </motion.div>
          </motion.div>

          {/* Right: product Details */}
          <motion.div variants={itemVariants} className="flex-1 space-y-6">
            <div>
              <span className="bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase shadow-sm">
                {product.category}
              </span>
              <motion.h1 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="text-4xl font-bold text-gray-900 mt-4"
              >
                {product.name}
              </motion.h1>
              
              <div className="flex items-baseline gap-4 mt-6">
                <motion.p 
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4, type: "spring" }}
                  className="text-3xl font-bold text-indigo-600"
                >
                  RM{product.offerPrice}
                </motion.p>
                <p className="text-xl text-gray-400 line-through">RM{product.price}</p>
              </div>
            </div>

            <motion.div 
              variants={itemVariants}
              className="pt-6 border-t border-gray-200"
            >
              <p className="text-lg font-semibold mb-3 text-gray-800">Description</p>
              <ul className="space-y-2">
                {product.description.map((desc, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="text-gray-600 flex items-start gap-2"
                  >
                    <span className="text-indigo-500 mt-1.5">•</span> {desc}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Related products Section */}
        <motion.div 
          variants={itemVariants}
          className="mt-32"
        >
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">You May Also Like</h2>
            <div className="w-16 h-1 bg-indigo-500 rounded-full mt-3" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {relatedProducts.map((item, index) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <ProductCard product={item} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-30px) translateX(20px); }
        }
        
        @keyframes floatParticle {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        .animate-gradientShift {
          background-size: 200% 200%;
          animation: gradientShift 10s ease infinite;
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-pulseSlow {
          animation: pulseSlow 4s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default SingleProduct;