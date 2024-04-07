
import { useParams } from "react-router-dom";
import useProducts from "../utils/useProducts";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  /* Getting data from custom hook */
  const Product = useProducts();

  useEffect(() => {
    getProductData();
  }, [Product]);

  const getProductData = () => {
    try {
      const newData = Product.find((item) => item.id == id);
      setData(newData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-around p-4">
      {loading || !data ? (
        <div className="w-full md:w-1/3 mb-4 md:mb-0 animate-pulse bg-gray-300 h-64"></div>
      ) : (
        <div className="flex justify-center flex-col">
          <img
            className="h-[420px] w-full"
            src={data.images[0]}
            alt={data.id}
          />
          <h2 className="text-2xl font-semibold mb-2">{data.title}</h2>
          <p className="text-gray-600 mb-4">{data.description}</p>
          <div className="flex items-center mb-4">
            <p className="text-lg text-red-500 font-semibold mr-2">
              {data.discountPercentage > 0 && (
                <>
                  <span className="line-through">${data.price}</span> $
                  {(
                    data.price -
                    (data.price * data.discountPercentage) / 100
                  ).toFixed(2)}
                </>
              )}
              {!data.discountPercentage && `$${data.price}`}
            </p>
            {data.discountPercentage > 0 && (
              <span className="text-gray-500">
                {data.discountPercentage}% off
              </span>
            )}
          </div>
          <div className="flex items-center mb-2">
            <span className="text-gray-700">Rating:</span>
            <div className="ml-2 flex items-center">
              <span className="text-lg text-yellow-500 font-semibold">
                {data.rating}
              </span>
            </div>
          </div>
          <p className="text-gray-700 mb-2">Brand: {data.brand}</p>
          <p className="text-gray-700">Category: {data.category}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
