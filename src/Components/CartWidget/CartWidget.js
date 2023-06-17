//Componente widget que renderiza el icono de carrito de compras usando MUI y la cantidad de productos que hay en el carrito (hardcodeado)

import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <div className="m-2">
      <button src="#">
        <ShoppingCartIcon />
      </button>
      <p>5</p>
    </div>
  );
};

export default CartWidget;
