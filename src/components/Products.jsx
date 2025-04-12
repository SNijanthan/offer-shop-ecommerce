import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetchProducts from "../customHook/useFetchProducts";
import useFilterProducts from "../customHook/useFilterProducts";
import { addToCart } from "../utils/cartSlice";

const Products = () => {
  useFetchProducts();
  const products = useSelector((store) => store.products);

  const { filteredProducts, filterByCategory } = useFilterProducts(products);

  const [sortType, setSortType] = useState(null);
  const [addedProducts, setAddedProducts] = useState([]);

  const [toast, setToast] = useState(false);

  const dispatch = useDispatch();

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortType === "lowToHigh") return a.price - b.price;
    if (sortType === "highToLow") return b.price - a.price;
    return 0;
  });

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setAddedProducts((prev) => [...prev, product.id]);
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 1500);
  };

  return (
    <div className="w-10/12 m-auto mt-10">
      <div className="flex items-center justify-between">
        <div className="mx-5">
          {["all", "clothes", "electronics", "furniture", "shoes"].map(
            (cat) => (
              <button
                key={cat}
                className="btn bg-purple-600 rounded-full hover:bg-black text-white capitalize mx-2"
                onClick={() => {
                  filterByCategory(cat);
                  if (cat === "all") setSortType(null);
                }}
              >
                {cat}
              </button>
            )
          )}
        </div>
        <div className="mx-5">
          <button
            className="btn bg-purple-600 rounded-full hover:bg-black text-white capitalize mx-2"
            onClick={() => setSortType("lowToHigh")}
          >
            Price: Low To High
          </button>
          <button
            className="btn bg-purple-600 rounded-full hover:bg-black text-white capitalize mx-2"
            onClick={() => setSortType("highToLow")}
          >
            Price: High To Low
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-10 my-10">
        {sortedProducts.map((product) => (
          <div className="card bg-gray-200 w-96 shadow-sm" key={product.id}>
            <figure className="p-2">
              <img src={product.image} alt="product" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-fira">{product.title}</h2>
              <p className="font-poppins">{product.description}</p>
              <p className="font-poppins font-bold">₹ {product.price}</p>
            </div>
            {toast && (
              <div className="toast toast-top toast-center border-none">
                <div className="alert alert-success">
                  <span className="font-fira text-white font-bold">
                    Added to cart successfully..!
                  </span>
                </div>
              </div>
            )}
            <div className="card-actions flex justify-center items-center pb-5">
              <button
                className="btn btn-primary px-8 w-40"
                onClick={() => handleAddToCart(product)}
              >
                {addedProducts.includes(product.id)
                  ? "Added to Cart"
                  : "Add to Cart"}
              </button>
              <div className=" ml-10">
                <button className="btn bg-gray-300 mx-6">✏️</button>
                <button className="btn bg-gray-300">🗑️</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
