import { categories } from "../assets/assets";
import { useAppContext } from "../context/appContext";
import { motion } from "framer-motion";

const Category = () => {
  const { navigate } = useAppContext();

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

      {/* Main Grid Logic: 
          - 'grid-cols-6' ensures all 6 items stay in one row even on the smallest mobile screen.
          - 'gap-2' for mobile to prevent overflow, 'md:gap-6' for desktop spacing.
      */}
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
            {/* Image Container */}
            <div className="w-full aspect-square overflow-hidden rounded-lg bg-white/40 mb-2 md:mb-4 flex items-center justify-center">
              <img
                src={category.image}
                alt={category.text}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Category Text: Responsive font size to ensure it fits on mobile */}
            <p className="text-[10px] sm:text-xs md:text-base font-bold text-gray-800 text-center whitespace-nowrap">
              {category.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Category;