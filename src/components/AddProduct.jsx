import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../utils/productsSlice";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [toast, setToast] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((store) => store.products);

  const lastProduct = products[products.length - 1];

  const handleAddProduct = () => {
    if (!title || !price || !description || !category || !image) {
      setError("All fields are required!");
      return;
    }
    if (isNaN(price)) {
      setError("Price must be a number.");
      return;
    }

    dispatch(
      updateProducts({
        id: (lastProduct?.id || 0) + 1,
        title,
        price: Number(price),
        description,
        category,
        image,
      })
    );
    setToast(true);
    setSuccess(true);
    setError("");
    setTitle("");
    setPrice("");
    setDescription("");
    setCategory("");
    setImage("");

    setTimeout(() => {
      setToast(false);
      setSuccess(false);
      navigate("/");
    }, 3000);
  };

  return (
    <>
      <div className="w-4/12 m-auto border bg-slate-200 border-gray-300 px-5 mt-10 py-2 flex  flex-col justify-center rounded-box  font-fira">
        <fieldset className="fieldset w-full rounded-box">
          <legend className="fieldset-legend text-center text-3xl text-amber-950">
            Add Product
          </legend>
          <label className="fieldset-label">Title</label>
          <input
            type="text"
            className="input w-full my-2 py-3 focus:outline-none"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className="fieldset-label">Price</label>
          <input
            type="number"
            className="input w-full my-2 py-3 focus:outline-none"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label className="fieldset-label">Description</label>
          <textarea
            className="textarea w-full focus:outline-none"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <label className="fieldset-label">Category</label>
          <input
            type="text"
            className="input w-full my-2 py-3 focus:outline-none"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <label className="fieldset-label">Image</label>
          <input
            type="text"
            className="input w-full my-2 py-3 focus:outline-none"
            placeholder="Image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          {success && (
            <p className="text-green-700">
              Product added successfully, Redirecting to main page..!
            </p>
          )}
          {error && <p className="text-red-600">{error}</p>}
          {toast && (
            <div className="toast toast-top toast-center">
              <div className="alert alert-info">
                <span>Product Added Successfully..!</span>
              </div>
            </div>
          )}
          <button
            className="btn bg-purple-800 py-3 text-white"
            onClick={handleAddProduct}
          >
            Add Product
          </button>
        </fieldset>
      </div>
    </>
  );
};

export default AddProduct;
