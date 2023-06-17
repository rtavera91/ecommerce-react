import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import "./ProductList.css";

//import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("https://fakestoreapi.com/products").then((json) =>
      setProducts(json.data)
    );
  }, []);

  return (
    <div className="container d-flex justify-content-center flex-wrap">
      {products.map((product) => (
        <div style={{ margin: 20 }} key={product.id}>
          <ItemListContainer product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
