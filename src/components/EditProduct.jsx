import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProducts } from "../utils/productsSlice";

const EditProduct = ({ product, setProduct, isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [toast, setToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProducts(product));
    setToast(true);
    setTimeout(() => {
      setToast(false);
      onClose(); // Now it's called after the toast disappears
    }, 1500);
  };

  if (!isOpen || !product) return null;

  return (
    <>
      <dialog id="edit_modal" className="modal modal-open font-poppins">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4 text-center">Edit Product</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="input input-bordered w-full mb-3"
              value={product.title}
              onChange={(e) =>
                setProduct({ ...product, title: e.target.value })
              }
              placeholder="Title"
              required
            />
            <input
              type="number"
              className="input input-bordered w-full mb-3"
              value={product.price}
              onChange={(e) =>
                setProduct({
                  ...product,
                  price: parseFloat(e.target.value) || 0,
                })
              }
              placeholder="Price"
              required
            />
            <input
              type="text"
              placeholder="Image URL"
              className="input input-bordered w-full mb-3"
              value={product.image}
              onChange={(e) =>
                setProduct({ ...product, image: e.target.value })
              }
              required
            />
            <textarea
              className="textarea textarea-bordered w-full mb-3"
              value={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
              placeholder="Description"
              required
            />
            {toast && <p className="text-center text-green-700 font-fira">Product Updated Successfully ..!</p>}
            <div className="flex justify-end gap-2">
              <button type="button" className="btn" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>
          </form>
        </div>
      </dialog>

      {toast && (
        <div className="toast toast-top toast-center z-50">
          <div className="alert alert-success">
            <span className="font-fira text-white font-bold">
              Product updated successfully!
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProduct;
