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
//         <Link stroke to="/" className="hover:text-indigo-500">Home</Link> /
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
//               />
//             ))}
//           </div>
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="flex-1 bg-[#F9FAFB] rounded-3xl overflow-hidden border border-gray-100"
//           >
//             <img src={`http://localhost:5000/images/${thumbnail}`} className="w-full h-full object-cover" />
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
//           <button className="w-full md:w-max px-12 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-indigo-600 transition-colors duration-300 shadow-xl shadow-gray-200">
//             Enquire About This Product
//           </button>
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

  return (
    <div className="mt-16 px-4 md:px-10 lg:px-20 mb-20">
      {/* Breadcrumbs */}
      <nav className="flex gap-2 text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-indigo-500">Home</Link> /
        <Link to="/products" className="hover:text-indigo-500">Products</Link> /
        <span className="text-indigo-500 font-medium">{product.name}</span>
      </nav>

      <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
        {/* Left: Image Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4 flex-1">
          <div className="flex md:flex-col gap-3 overflow-x-auto">
            {product.image.map((img, index) => (
              <img
                key={index}
                src={`http://localhost:5000/images/${img}`}
                onClick={() => setThumbnail(img)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 transition-all ${thumbnail === img ? 'border-indigo-500 scale-105' : 'border-transparent opacity-70'}`}
                alt="thumbnail"
              />
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 bg-[#F9FAFB] rounded-3xl overflow-hidden border border-gray-100"
          >
            <img src={`http://localhost:5000/images/${thumbnail}`} className="w-full h-full object-cover" alt={product.name} />
          </motion.div>
        </div>

        {/* Right: product Details */}
        <div className="flex-1 space-y-6">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="bg-indigo-50 text-indigo-600 px-4 py-1 rounded-full text-xs font-bold uppercase">
              {product.category}
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mt-4">{product.name}</h1>
            
            <div className="flex items-baseline gap-4 mt-6">
              <p className="text-3xl font-bold text-indigo-600">RM{product.offerPrice}</p>
              <p className="text-xl text-gray-400 line-through">RM{product.price}</p>
            </div>
          </motion.div>

          <div className="pt-6 border-t border-gray-100">
            <p className="text-lg font-semibold mb-3">Description</p>
            <ul className="space-y-2">
              {product.description.map((desc, i) => (
                <li key={i} className="text-gray-600 flex items-start gap-2">
                  <span className="text-indigo-500 mt-1.5">•</span> {desc}
                </li>
              ))}
            </ul>
          </div>

          {/* Simple Inquiry Button instead of Buy Now */}
          <button className="w-full md:w-max px-12 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-indigo-600 transition-colors duration-300 shadow-xl shadow-gray-200">
            Enquire About This Product
          </button>
        </div>
      </div>

      {/* Related products Section */}
      <div className="mt-32">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">You May Also Like</h2>
          <div className="w-16 h-1 bg-indigo-500 rounded-full mt-3"></div>
        </div>

        {/* Grid: 2 columns on mobile (grid-cols-2), 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {relatedProducts.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;