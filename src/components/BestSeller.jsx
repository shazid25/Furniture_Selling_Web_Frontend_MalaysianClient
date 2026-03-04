import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useAppContext } from "../context/appContext";

const BestSeller = () => {
  const { products } = useAppContext();

  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium">Best Sellers</p>

      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center">
        {products
          .filter((product) => product.inStock)
          .slice(0, 4)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>

      {/* Highlighted "All Products" button */}
      <div className="flex justify-center items-center mt-8 text-gray-600">
        <span className="text-sm mr-3">To explore more,</span>
        <Link
          to="/products"
          className="group inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        >
          <span className="text-base">All Products</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="transform group-hover:translate-x-1 transition-transform"
          >
            <path
              d="M4.1665 10H15.8332M15.8332 10L11.6665 5.83331M15.8332 10L11.6665 14.1667"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BestSeller;