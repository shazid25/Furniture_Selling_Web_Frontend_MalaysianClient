// import { useEffect, useState } from "react";
// import { useAppContext } from "../context/appContext";
// import { Link, useParams } from "react-router-dom";
// import { assets } from "../assets/assets";
// import ProductCard from "../components/ProductCard";
// const SingleProduct = () => {
//   const { products, navigate, addToCart } = useAppContext();
//   const { id } = useParams();
//   const [thumbnail, setThumbnail] = useState(null);
//   const [relatedProducts, setRelatedProducts] = useState([]);
//   const product = products.find((product) => product._id === id);
//   console.log("product", product);
//   useEffect(() => {
//     if (products.length > 0) {
//       let productsCopy = products.slice();
//       productsCopy = productsCopy.filter(
//         (product) => product.category === product.category
//       );
//       setRelatedProducts(productsCopy.slice(0, 5));
//     }
//   }, [products]);

//   useEffect(() => {
//     setThumbnail(product?.image[0] ? product.image[0] : null);
//   }, [product]);
//   return (
//     product && (
//       <div className="mt-16">
//         <p>
//           <Link to="/">Home</Link>/<Link to={"/products"}> Products</Link> /
//           <Link to={`/products/${product.category.toLowerCase()}`}>
//             {" "}
//             {product.category}
//           </Link>{" "}
//           /<span className="text-indigo-500"> {product.name}</span>
//         </p>

//         <div className="flex flex-col md:flex-row gap-16 mt-4">
//           <div className="flex gap-3">
//             <div className="flex flex-col gap-3">
//               {product.image.map((image, index) => (
//                 <div
//                   key={index}
//                   onClick={() => setThumbnail(image)}
//                   className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer"
//                 >
//                   <img
//                     src={`http://localhost:5000/images/${image}`}
//                     alt={`Thumbnail ${index + 1}`}
//                   />
//                 </div>
//               ))}
//             </div>

//             <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
//               <img
//                 src={`http://localhost:5000/images/${thumbnail}`}
//                 alt="Selected product"
//               />
//             </div>
//           </div>

//           <div className="text-sm w-full md:w-1/2">
//             <h1 className="text-3xl font-medium">{product.name}</h1>

//             <div className="flex items-center gap-0.5 mt-1">
//               {Array(5)
//                 .fill("")
//                 .map(
//                   (_, i) =>
//                     product.rating >
//                     (
//                       <img
//                         src={i < 4 ? assets.star_icon : assets.star_dull_icon}
//                         alt="star"
//                         key={i}
//                         className="w-3.5 md:w-4"
//                       />
//                     )
//                 )}
//               <p className="text-base ml-2">(4)</p>
//             </div>

//             <div className="mt-6">
//               <p className="text-gray-500/70 line-through">
//                 MRP: RM{product.price}
//               </p>
//               <p className="text-2xl font-medium">MRP: RM{product.offerPrice}</p>
//               <span className="text-gray-500/70">(inclusive of all taxes)</span>
//             </div>

//             <p className="text-base font-medium mt-6">About Product</p>
//             <ul className="list-disc ml-4 text-gray-500/70">
//               {product.description.map((desc, index) => (
//                 <li key={index}>{desc}</li>
//               ))}
//             </ul>

//             <div className="flex items-center mt-10 gap-4 text-base">
//               <button
//                 onClick={() => addToCart(product._id)}
//                 className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition"
//               >
//                 Add to Cart
//               </button>
//               <button
//                 onClick={() => {
//                   addToCart(product._id);
//                   navigate("/cart");
//                   scrollTo(0, 0);
//                 }}
//                 className="w-full py-3.5 cursor-pointer font-medium bg-indigo-500 text-white hover:bg-indigo-600 transition"
//               >
//                 Buy now
//               </button>
//             </div>
//           </div>
//         </div>
//         {/* related prodcuts  */}
//         <div className="flex flex-col items-center mt-20">
//           <div className="flex flex-col items-center w-max">
//             <p className="text-2xl font-medium">Related Products</p>
//             <div className="w-20 h-0.5 bg-primary rounded-full mt-2"></div>
//           </div>

//           <div className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center justify-center">
//             {relatedProducts
//               .filter((product) => product.inStock)
//               .map((product, index) => (
//                 <ProductCard key={index} product={product} />
//               ))}
//           </div>
//           <button
//             onClick={() => {
//               navigate("/products");
//               scrollTo(0, 0);
//             }}
//             className="w-1/2 my-8 py-3.5 cursor-pointer font-medium bg-indigo-500 text-white hover:bg-indigo-600 transition"
//           >
//             See More
//           </button>
//         </div>
//       </div>
//     )
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
        <Link stroke to="/" className="hover:text-indigo-500">Home</Link> /
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
              />
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 bg-[#F9FAFB] rounded-3xl overflow-hidden border border-gray-100"
          >
            <img src={`http://localhost:5000/images/${thumbnail}`} className="w-full h-full object-cover" />
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