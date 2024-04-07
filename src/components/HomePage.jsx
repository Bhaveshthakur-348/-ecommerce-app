import { useState } from "react";
import Products from "./Products";
import useProducts from "../utils/useProducts";

const HomePage = () => {
  /* Getting Products data from custom hook */
  const data = useProducts();

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <div>
      {/* Product Grid */}
      <div className="container mx-auto p-4">
        {currentProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {currentProducts.map((product) => (
              <Products key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {/* Render 10 shimmer boxes */}
            {Array.from({ length: productsPerPage }).map((_, index) => (
              <div key={index} className="animate-pulse bg-gray-200 h-64 w-60"></div>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="mt-4 flex justify-center">
          <ul className="flex space-x-2">
            {Array.from({ length: Math.ceil(data.length / productsPerPage) }).map((_, index) => (
              <li key={index}>
                <button
                  className={`px-3 py-1 rounded ${
                    currentPage === index + 1 ? "bg-blue-900 text-white" : "bg-gray-200"
                  }`}
                  onClick={() => {
                    paginate(index + 1);
                    scrollToTop();
                  }}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
