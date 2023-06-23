import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ItemListContainer from "../../Components/ItemListContainer/ItemListContainer";
import { Link } from "react-router-dom";

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
      <h1 className="text-center">Collection: {categoryId}</h1>
      <div className="className=container d-flex justify-content-center flex-wrap">
        {filteredProducts.map((product) => (
          <div style={{ margin: 10 }} key={product.id}>
            <Link to={`/detail/${product.id}`} className="text-decoration-none">
              <ItemListContainer product={product} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
