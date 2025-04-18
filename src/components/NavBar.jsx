import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const cartItems = useSelector((store) => store.cart);

  const cartCount = cartItems.length || 0;

  return (
    <>
      <div className="navbar bg-gray-300 p-5 shadow-sm ">
        <div className="flex-1">
          <Link
            to={"/"}
            className="btn bg-purple-800 text-white hover:bg-purple-500  hover:text-white text-xl px-3  py-5 ml-10 tracking-widest font-gothic font-light"
          >
            OFFERS SHOP
          </Link>
        </div>
        <Link to={"/add-product"}>
          <button className="mr-15 btn btn-accent text-white font-poppins">
            Add Product
          </button>
        </Link>
        <Link to={"/cart"}>
          <div className="flex-none mr-15">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-circle p-6 hover:bg-black hover:text-white hover:rounded-full"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />{" "}
                  </svg>
                  <span className="badge badge-sm indicator-item bg-black text-white border-none">
                    {cartCount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
