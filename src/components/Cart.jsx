import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart);

  if (Array.isArray(cartItems) && cartItems.length === 0)
    return (
      <div className="w-10/12 flex items-center justify-center m-auto mt-36">
        <h1 className="font-fira font-light text-3xl mr-5 text-red-600">
          Basket is Empty..! Keep Shopping..!
        </h1>
        <img src="/image.png" alt="icon" className="w-8 h-8" />
      </div>
    );

  return (
    <div className="w-8/12 m-auto mt-4 font-poppins">
      {cartItems.map((item) => (
        <div
          className="hero-content flex-col text-center rounded-2xl lg:flex-row bg-gray-300 my-3"
          key={item.id}
        >
          <img src={item.image} className="max-w-sm rounded-lg shadow-xl" />
          <div>
            <h1 className="text-2xl font-bold">{item.title}</h1>
            <p className="pt-5 pb-3 text-gray-600">{item.description}</p>
            <p className="py-2">₹{item.price}</p>
          </div>
        </div>
      ))}
      <div className="text-right text-xl font-semibold mt-10 mb-16">
        Total Amount:{" "}
        <span className="text-blue-500">
          ₹{cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default Cart;
