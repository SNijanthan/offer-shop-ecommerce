import React from "react";
import useFetchProducts from "../customHook/useFetchProducts";
import { useSelector } from "react-redux";

const Products = () => {
  useFetchProducts();

  const products = useSelector((store) => store.products);

  return (
    <div className="flex items-center justify-between flex-wrap gap-10 w-10/12 m-auto my-10">
      {products.map((product) => (
        <div className="card bg-gray-200 w-96 shadow-sm">
          <figure className="p-2">
            <img src={product.image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-fira">{product.title}</h2>
            <p className="font-poppins">{product.description}</p>
            <p className="font-poppins font-bold">₹ {product.price}</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
