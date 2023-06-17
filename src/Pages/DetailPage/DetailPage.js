import { useState, useEffect } from "react";
import axios from "axios";

import ItemListContainer from "../../Components/ItemListContainer/ItemListContainer";

import { useParams } from "react-router-dom";

const DetailPage = () => {
  const [product, setProduct] = useState({});

  let { productId } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
      {product.id ? <ItemListContainer product={product} /> : null}
    </div>
  );
};

export default DetailPage;
