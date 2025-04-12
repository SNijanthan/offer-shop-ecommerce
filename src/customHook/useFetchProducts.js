import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../utils/productsSlice";
import { useEffect } from "react";

const useFetchProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products) || [];

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "https://my-json-server.typicode.com/SNijanthan/mock-api/products"
      );
      dispatch(setProducts(res?.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!Array.isArray(products) || products.length === 0) {
      fetchProducts();
    }
  }, [dispatch, products]);
};

export default useFetchProducts;
