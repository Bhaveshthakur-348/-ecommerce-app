import React, { useEffect, useState } from "react";

const useProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("https://dummyjson.com/products");
      const json = await data.json();
      setData(json.products);
    } catch (err) {
      console.error(err);
    }
  };

  return data;
};

export default useProducts;
