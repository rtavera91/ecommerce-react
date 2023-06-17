//Componente que renderiza el listado de productos que toma de la API en ProductList

import React from "react";
import ProductList from "../../Components/ProductList/ProductList";

const HomePage = () => {
  return (
    <div>
      <h1>Encuentra todos nuestros productos</h1>
      <ProductList />
    </div>
  );
};

export default HomePage;
