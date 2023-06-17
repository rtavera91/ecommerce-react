import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ItemListContainer from "../../Components/ItemListContainer/ItemListContainer";

const CategoryPage = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredProducts = products.filter(
    (product) => product.category === categoryId
  );

  return (
    <div>
      {filteredProducts.map((product) => (
        <div style={{ margin: 10 }} key={product.id}>
          <ItemListContainer product={product} />
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
