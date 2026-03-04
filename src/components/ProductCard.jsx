import { useAppContext } from "../context/appContext";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const { navigate } = useAppContext();

  const cardGradients = {
    Living: "from-emerald-400/20 via-teal-500/10 to-white",
    Bedroom: "from-indigo-400/20 via-purple-500/10 to-white",
    Kitchen: "from-orange-400/20 via-yellow-500/10 to-white",
    Default: "from-blue-400/20 via-indigo-500/10 to-white"
  };

  const currentGradient = cardGradients[product.category] || cardGradients.Default;

  const handleDetailsClick = (e) => {
    if (e) e.stopPropagation(); 
    // FIXED: Path now matches /product/:category/:id
    const categoryPath = product.category.toLowerCase();
    navigate(`/product/${categoryPath}/${product._id}`);
    window.scrollTo(0, 0);
  };

  return (
    product && (
      <motion.div
        whileHover={{ y: -10 }}
        onClick={handleDetailsClick}
        className={`group cursor-pointer relative overflow-hidden rounded-3xl border border-white/50 shadow-lg bg-gradient-to-br ${currentGradient} transition-all duration-500 hover:shadow-2xl w-full`}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>

        <div className="relative bg-white/40 backdrop-blur-md m-1 rounded-[22px] overflow-hidden">
          <div className="relative aspect-square flex items-center justify-center p-6">
            <motion.img
              whileHover={{ scale: 1.15, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="drop-shadow-2xl object-contain w-full h-full"
              src={`http://localhost:5000/images/${product.image[0]}`}
              alt={product.name}
            />
            
            <span className="absolute top-3 left-3 bg-indigo-600 text-white text-[10px] px-3 py-1 rounded-full font-bold shadow-lg">
              {product.category}
            </span>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDetailsClick}
              className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 whitespace-nowrap"
            >
              View Details
            </motion.button>
          </div>

          <div className="p-4 text-center bg-white/60 backdrop-blur-sm">
            <h3 className="text-gray-900 font-bold text-base mt-2 truncate">{product.name}</h3>
            <div className="flex flex-col items-center mt-3 space-y-0.5">
              <p className="text-xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                RM {product.offerPrice}
              </p>
              <p className="text-xs text-gray-400 line-through">RM {product.price}</p>
            </div>
          </div>
        </div>
      </motion.div>
    )
  );
};

export default ProductCard;