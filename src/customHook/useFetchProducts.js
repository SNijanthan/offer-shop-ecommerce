import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../utils/productsSlice";
import { useEffect, useState } from "react";
import Error from "../components/Error";

const useFetchProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products) || [];

  const [error, setError] = useState(false);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "https://my-json-server.typicode.com/SNijanthan/mock-api/products"
      );
      dispatch(setProducts(res?.data));
      setError(null);
    } catch (err) {
      if (err.response?.status === 404 || err.response?.status === 500) {
        setError(true);
      }
    }
  };

  useEffect(() => {
    if (!Array.isArray(products) || products.length === 0) {
      fetchProducts();
    }
  }, [dispatch, products]);

  return { error };
};

export default useFetchProducts;
