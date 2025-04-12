import { useEffect, useState } from "react";

const useFilterProducts = (allProducts) => {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  useEffect(() => {
    setFilteredProducts(allProducts);
  }, [allProducts]);

  const filterByCategory = (category) => {
    if (category === "all") {
      setFilteredProducts(allProducts);
    } else {
      const result = allProducts.filter(
        (product) => product.category === category
      );
      setFilteredProducts(result);
    }
  };

  return { filteredProducts, filterByCategory };
};

export default useFilterProducts;
